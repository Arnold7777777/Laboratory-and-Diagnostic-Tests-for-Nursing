/* Lab & Diagnostic Tests study guide — interactions */
(function () {
  'use strict';

  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- reading-comfort toggles ---------- */
  ['big-text', 'dyslexic', 'art-bold', 'focus'].forEach(function (mode) {
    var btn = document.querySelector('[data-toggle="' + mode + '"]');
    if (!btn) return;
    if (LS.get('pref-' + mode) === '1') { document.body.classList.add(mode); btn.classList.add('on'); }
    btn.addEventListener('click', function () {
      var on = document.body.classList.toggle(mode);
      btn.classList.toggle('on', on);
      LS.set('pref-' + mode, on ? '1' : '0');
    });
  });

  /* ---------- reading progress bar ---------- */
  var bar = document.querySelector('.progress');
  function onScroll() {
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    }
    var bt = document.querySelector('.backtop');
    if (bt) bt.classList.toggle('on', window.scrollY > 600);
    spy();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  var bt = document.querySelector('.backtop');
  if (bt) bt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- test cards: open / close ---------- */
  function setCard(card, open) {
    card.classList.toggle('is-open', open);
    var h = card.querySelector('.test-head');
    if (h) h.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  document.querySelectorAll('.test-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var card = head.closest('.test-card');
      var open = !card.classList.contains('is-open');
      setCard(card, open);
      if (open) {
        // open the first two sections automatically so there's something to read
        var secs = card.querySelectorAll('.sec');
        for (var i = 0; i < Math.min(2, secs.length); i++) secs[i].classList.add('open');
      }
    });
  });

  /* ---------- inner sections ---------- */
  document.querySelectorAll('.sec-head').forEach(function (h) {
    h.addEventListener('click', function () {
      var s = h.closest('.sec');
      var open = s.classList.toggle('open');
      h.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---------- expand / collapse all ---------- */
  var eAll = document.querySelector('[data-action="expand-all"]');
  var cAll = document.querySelector('[data-action="collapse-all"]');
  if (eAll) eAll.addEventListener('click', function () {
    document.querySelectorAll('.test-card').forEach(function (c) { setCard(c, true); });
    document.querySelectorAll('.sec').forEach(function (s) { s.classList.add('open'); });
  });
  if (cAll) cAll.addEventListener('click', function () {
    document.querySelectorAll('.test-card').forEach(function (c) { setCard(c, false); });
    document.querySelectorAll('.sec').forEach(function (s) { s.classList.remove('open'); });
  });

  /* ---------- search ---------- */
  var input = document.querySelector('#search');
  var counter = document.querySelector('.search-count');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.test-card'));
  var tocItems = Array.prototype.slice.call(document.querySelectorAll('.sidebar li'));

  function runSearch() {
    var q = (input.value || '').trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (c, i) {
      var hay = (c.getAttribute('data-search') || '') + ' ' + c.textContent.toLowerCase();
      var hit = !q || hay.indexOf(q) !== -1;
      c.classList.toggle('hidden', !hit);
      if (tocItems[i]) tocItems[i].classList.toggle('hidden', !hit);
      if (hit) shown++;
    });
    if (counter) counter.textContent = q ? shown + ' of ' + cards.length : cards.length + ' tests';
  }
  if (input) {
    input.addEventListener('input', runSearch);
    runSearch();
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== input) { e.preventDefault(); input.focus(); }
      if (e.key === 'Escape' && document.activeElement === input) { input.value = ''; runSearch(); input.blur(); }
    });
  }

  /* ---------- open card when linked to from the sidebar / a hash ---------- */
  function openFromHash() {
    var id = location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (el.classList.contains('test-card')) {
      setCard(el, true);
      var secs = el.querySelectorAll('.sec');
      for (var i = 0; i < Math.min(2, secs.length); i++) secs[i].classList.add('open');
    }
    setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 40);
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();

  /* ---------- scroll-spy for the sidebar ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.sidebar a'));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var spyTick = 0;
  function spy() {
    if (!links.length) return;
    if (spyTick++ % 3) return;
    var best = -1, bestTop = -Infinity;
    for (var i = 0; i < targets.length; i++) {
      var t = targets[i];
      if (!t) continue;
      var top = t.getBoundingClientRect().top - 120;
      if (top <= 0 && top > bestTop) { bestTop = top; best = i; }
    }
    links.forEach(function (a, i) { a.classList.toggle('active', i === best); });
  }

  /* ---------- lightbox ---------- */
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  document.addEventListener('click', function (e) {
    var img = e.target.closest('figure img, .ref-card img');
    if (img) { lbImg.src = img.src; lbImg.alt = img.alt || ''; lb.classList.add('on'); return; }
    if (e.target.closest('.lightbox')) lb.classList.remove('on');
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); });

  onScroll();
})();
