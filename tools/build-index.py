"""Baut assets/search-index.js aus allen kapitel-*.html.

Aufruf (im Ordner CC_Learning):  python tools/build-index.py

Jeder <section class="lesson" id="..."> wird ein Sucheintrag (Titel = <h2>),
jede <h3> darin zusätzlich ein eigener Eintrag, damit Treffer genau springen.
"""
import glob, html, json, os, re
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.entries, self.sec, self.depth = [], None, 0
        self.capture, self.buf, self.skip = None, [], 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style", "svg"):
            self.skip += 1
        if tag == "section" and "lesson" in (a.get("class") or ""):
            self.sec = {"id": a.get("id"), "title": "", "text": [], "keywords": a.get("data-keywords", ""), "subs": []}
            self.depth = 0
        if self.sec is not None:
            if tag == "section":
                self.depth += 1
            if tag in ("h2", "h3"):
                self.capture, self.buf = tag, []

    def handle_endtag(self, tag):
        if tag in ("script", "style", "svg"):
            self.skip -= 1
        if self.sec is None:
            return
        if tag == self.capture:
            t = " ".join("".join(self.buf).split())
            if tag == "h2":
                self.sec["title"] = t
            else:
                self.sec["subs"].append({"title": t, "text": []})
            self.capture = None
        if tag == "section":
            self.depth -= 1
            if self.depth == 0:
                self.entries.append(self.sec)
                self.sec = None

    def handle_data(self, data):
        if self.sec is None or self.skip:
            return
        if self.capture:
            self.buf.append(data)
            return
        target = self.sec["subs"][-1]["text"] if self.sec["subs"] else self.sec["text"]
        target.append(data)


def main():
    index = []
    for path in sorted(glob.glob(os.path.join(ROOT, "kapitel-*.html"))):
        name = os.path.basename(path)
        page = name[:-5]
        src = open(path, encoding="utf-8").read()
        m = re.search(r"<title>(.*?)</title>", src)
        chapter = html.unescape(m.group(1).split("–")[0].strip()) if m else page
        p = Parser()
        p.feed(src)
        for s in p.entries:
            # Abschnittsnummer/Emoji am Anfang (aus .sec-num) entfernen
            body = re.sub(r"^\S{1,2}\s+", "", " ".join(" ".join(s["text"]).split()))
            all_text = body + " " + " ".join(" ".join(" ".join(x["text"]).split()) + " " + x["title"] for x in s["subs"])
            index.append({"page": page, "url": name, "chapter": chapter, "id": s["id"],
                          "title": s["title"], "keywords": s["keywords"], "text": all_text.strip()[:1500]})
            for sub in s["subs"]:
                t = " ".join(" ".join(sub["text"]).split())
                index.append({"page": page, "url": name, "chapter": chapter + " · " + s["title"], "id": s["id"],
                              "title": sub["title"], "keywords": "", "text": t[:600]})
    out = os.path.join(ROOT, "assets", "search-index.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("/* Automatisch erzeugt von tools/build-index.py – nicht von Hand ändern. */\n")
        f.write("window.WIKI_INDEX = " + json.dumps(index, ensure_ascii=False, indent=0) + ";\n")
    print(f"{len(index)} Einträge -> {out}")


if __name__ == "__main__":
    main()
