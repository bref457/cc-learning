/* =========================================================
   Claude Code Lernwiki – gemeinsames Verhalten für alle Seiten
   Suche · Dunkelmodus · Tabs · Kopieren · Quiz · Merkkarten
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("ccwiki:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("ccwiki:" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const PAGE = document.body.dataset.page || "start";

  /* ---------- Dunkelmodus ---------- */
  const themeBtn = $("#theme-toggle");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    if (themeBtn) themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(store.get("theme", prefersDark ? "dark" : "light"));
  if (themeBtn) themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  });

  /* ---------- Mobiles Menü ---------- */
  const menuBtn = $("#menu-toggle");
  if (menuBtn) menuBtn.addEventListener("click", () => document.body.classList.toggle("nav-open"));
  $$(".sidebar a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));

  /* ---------- Code kopieren ---------- */
  $$(".code").forEach(block => {
    const pre = $("pre", block);
    if (!pre) return;
    const btn = document.createElement("button");
    btn.className = "copy-btn"; btn.type = "button"; btn.textContent = "Kopieren";
    btn.addEventListener("click", () => {
      // Kommentare (.c) und Prompt-Zeichen (.p) nicht mitkopieren
      const clone = pre.cloneNode(true);
      $$(".c, .p", clone).forEach(n => n.remove());
      const text = clone.textContent.replace(/\n{2,}/g, "\n").trim();
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "Kopiert ✓"; btn.classList.add("ok");
        setTimeout(() => { btn.textContent = "Kopieren"; btn.classList.remove("ok"); }, 1600);
      });
    });
    block.appendChild(btn);
  });

  /* ---------- Tabs ---------- */
  $$(".tabs").forEach(tabs => {
    const buttons = $$(".tab-list button", tabs);
    const panels = $$(".tab-panel", tabs);
    const group = tabs.dataset.group;
    function show(i) {
      buttons.forEach((b, j) => b.classList.toggle("active", i === j));
      panels.forEach((p, j) => p.classList.toggle("active", i === j));
    }
    buttons.forEach((b, i) => b.addEventListener("click", () => { show(i); if (group) store.set("tab:" + group, i); }));
    show(group ? Math.min(store.get("tab:" + group, 0), buttons.length - 1) : 0);
  });

  /* ---------- Inhaltsverzeichnis: aktuellen Abschnitt hervorheben ---------- */
  const allSections = $$("section.lesson[id]");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          $$(".sidebar .toc a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-30% 0px -65% 0px" });
    allSections.forEach(s => spy.observe(s));
  }

  /* ---------- Suche ---------- */
  const input = $("#search");
  const results = $("#search-results");
  const INDEX = (window.WIKI_INDEX || []);
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let activeIdx = -1;

  function highlight(text, terms) {
    let out = esc(text);
    terms.forEach(t => {
      if (!t) return;
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }
  function snippet(text, term) {
    const i = norm(text).indexOf(norm(term));
    if (i < 0) return text.slice(0, 130) + (text.length > 130 ? " …" : "");
    const start = Math.max(0, i - 50);
    return (start > 0 ? "… " : "") + text.slice(start, start + 150) + (start + 150 < text.length ? " …" : "");
  }
  function search(q) {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return INDEX.map(item => {
      const t = norm(item.title), b = norm(item.text), k = norm(item.keywords || "");
      let score = 0;
      for (const term of terms) {
        const inT = t.includes(term), inB = b.includes(term), inK = k.includes(term);
        if (!inT && !inB && !inK) return null;
        score += (inT ? 10 : 0) + (inK ? 6 : 0) + (inB ? 1 + Math.min(4, b.split(term).length - 1) : 0);
      }
      return { item, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 12);
  }
  function render(q) {
    const hits = search(q);
    activeIdx = -1;
    if (!q.trim()) { results.classList.remove("open"); return; }
    const terms = q.trim().split(/\s+/);
    results.innerHTML = hits.length ? hits.map(({ item }) => {
      const href = (item.url === location.pathname.split("/").pop() || (PAGE === item.page)) ? "#" + item.id : item.url + "#" + item.id;
      return '<a href="' + href + '"><div class="r-chap">' + esc(item.chapter) + '</div><div class="r-title">' + highlight(item.title, terms) +
        '</div><div class="r-snip">' + highlight(snippet(item.text, terms[0]), terms) + "</div></a>";
    }).join("") : '<div class="empty">Nichts gefunden. Versuch ein anderes Wort, z. B. „Installation“, „Cloud“ oder „Shift+Tab“.</div>';
    results.classList.add("open");
  }
  if (input && results) {
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("focus", () => input.value && render(input.value));
    input.addEventListener("keydown", e => {
      const links = $$("a", results);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = (activeIdx + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
      } else if (e.key === "Enter" && links.length) {
        (links[activeIdx >= 0 ? activeIdx : 0]).click();
      } else if (e.key === "Escape") { results.classList.remove("open"); input.blur(); }
    });
    results.addEventListener("click", () => { results.classList.remove("open"); });
    document.addEventListener("click", e => { if (!e.target.closest(".search-wrap")) results.classList.remove("open"); });
    document.addEventListener("keydown", e => {
      if ((e.key === "/" || (e.key === "k" && (e.ctrlKey || e.metaKey))) && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault(); input.focus();
      }
    });
  }

  /* ---------- Interaktive Diagramme (Schritte anklicken) ---------- */
  $$("[data-stepper]").forEach(fig => {
    const buttons = $$(".loop-steps button", fig);
    const explain = $(".loop-explain", fig);
    function show(i) {
      buttons.forEach((b, j) => b.classList.toggle("active", i === j));
      const key = buttons[i].dataset.step;
      $$("[data-node]", fig).forEach(n => n.style.opacity = (n.dataset.node === key || key === "all") ? "1" : ".35");
      explain.innerHTML = buttons[i].dataset.text;
    }
    buttons.forEach((b, i) => b.addEventListener("click", () => show(i)));
    show(0);
  });

  /* ---------- Quiz ---------- */
  const quizData = $("#quiz-data");
  const quizEl = $("#quiz");
  if (quizData && quizEl) {
    const questions = JSON.parse(quizData.textContent);
    let answered = 0, correct = 0;
    const scoreEl = document.createElement("div");
    scoreEl.className = "quiz-score";
    function updateScore() {
      const msg = answered < questions.length
        ? "Beantwortet: " + answered + " / " + questions.length + " · Richtig: " + correct
        : (correct === questions.length ? "🎉 Perfekt! " : correct >= questions.length * .7 ? "👍 Gut gemacht! " : "📚 Lies die markierten Abschnitte nochmals. ") + correct + " von " + questions.length + " richtig.";
      scoreEl.innerHTML = "<span>" + msg + '</span><button class="btn ghost" type="button">Neu starten</button>';
      $("button", scoreEl).addEventListener("click", build);
      if (answered === questions.length) store.set("quiz:" + PAGE, correct + "/" + questions.length);
    }
    function build() {
      answered = 0; correct = 0; quizEl.innerHTML = "";
      questions.forEach((q, qi) => {
        const box = document.createElement("div");
        box.className = "q";
        box.innerHTML = '<div class="q-text"><span class="q-num">' + (qi + 1) + ".</span>" + q.q + "</div>";
        q.a.forEach((opt, oi) => {
          const b = document.createElement("button");
          b.className = "opt"; b.type = "button"; b.innerHTML = opt;
          b.addEventListener("click", () => {
            $$(".opt", box).forEach((x, xi) => { x.disabled = true; if (xi === q.c) x.classList.add("right"); });
            if (oi !== q.c) b.classList.add("wrong"); else correct++;
            answered++; box.classList.add("answered"); updateScore();
          });
          box.appendChild(b);
        });
        const why = document.createElement("div");
        why.className = "why";
        why.innerHTML = "💡 " + q.why + (q.link ? ' <a href="#' + q.link + '">Zum Abschnitt →</a>' : "");
        box.appendChild(why);
        quizEl.appendChild(box);
      });
      quizEl.appendChild(scoreEl); updateScore();
    }
    build();
  }

  /* ---------- Merkkarten ---------- */
  const cardsData = $("#cards-data");
  const fcEl = $("#flashcards");
  if (cardsData && fcEl) {
    let cards = JSON.parse(cardsData.textContent);
    let i = 0;
    fcEl.innerHTML =
      '<div class="flashcard" tabindex="0" role="button" aria-label="Karte umdrehen"><div class="inner">' +
      '<div class="face front"><div class="f"></div><div class="hint">Klicken oder Leertaste zum Umdrehen</div></div>' +
      '<div class="face back"><div class="b"></div></div></div></div>' +
      '<div class="fc-controls"><button class="btn ghost" data-a="prev" type="button">← Zurück</button>' +
      '<span class="count"></span><button class="btn ghost" data-a="next" type="button">Weiter →</button>' +
      '<button class="btn ghost" data-a="shuffle" type="button">🔀 Mischen</button></div>';
    const card = $(".flashcard", fcEl);
    function show() {
      const wasFlipped = card.classList.contains("flipped");
      card.classList.remove("flipped");
      setTimeout(() => {
        $(".f", card).innerHTML = cards[i].f;
        $(".b", card).innerHTML = cards[i].b;
      }, wasFlipped ? 250 : 0);
      $(".count", fcEl).textContent = (i + 1) + " / " + cards.length;
    }
    const flip = () => card.classList.toggle("flipped");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", e => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
      if (e.key === "ArrowRight") { i = (i + 1) % cards.length; show(); }
      if (e.key === "ArrowLeft") { i = (i - 1 + cards.length) % cards.length; show(); }
    });
    $$(".fc-controls button", fcEl).forEach(b => b.addEventListener("click", () => {
      const a = b.dataset.a;
      if (a === "next") i = (i + 1) % cards.length;
      if (a === "prev") i = (i - 1 + cards.length) % cards.length;
      if (a === "shuffle") { cards = cards.map(c => [Math.random(), c]).sort((x, y) => x[0] - y[0]).map(x => x[1]); i = 0; }
      show();
    }));
    show();
  }
})();
