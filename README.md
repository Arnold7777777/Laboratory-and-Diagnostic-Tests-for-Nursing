# Laboratory & Diagnostic Tests — Nursing Study Guide

An ADHD-friendly visual study guide covering **96 laboratory and diagnostic tests**,
built from *Mosby's Manual of Diagnostic and Laboratory Tests* (chapters 1, 3, 4, 6, 7, 8, 9).

**Live site:** https://arnold7777777.github.io/Laboratory-and-Diagnostic-Tests-for-Nursing/

## Why it looks like this

Designed for people who lose the thread in a wall of text:

- **Nothing is open until you open it.** Every test is a collapsed card. Click one and you see
  one test — not ninety-six.
- **Focus mode** dims every card except the one you're reading.
- **Colour = meaning.** Green normal · yellow numbers to memorise · red *don't* ·
  orange *what can go wrong*.
- **The same five questions every time.** What's normal → why order it → who can't have it →
  before/during/after → what abnormal means.
- **Text size and font toggles** in the top bar (`A+` / `Aa`).
- **Press `/`** anywhere to search.
- **38 infographics** placed where they're relevant, click any to view full size.

## Chapters

| # | Chapter | Tests |
|---|---------|-------|
| 1 | Foundations: Getting Testing Right | overview |
| 4 | Endoscopic Studies | 14 |
| 6 | Manometric Studies | 5 |
| 8 | Nuclear Scanning | 22 |
| 3 | Electrodiagnostic Tests | 13 |
| 7 | Microbiologic Studies & Biopsies | 35 |
| 9 | Stool Tests | 7 |

Plus a **Lab Values & Visual Reference** page collecting every infographic in one place.

## Running it locally

It's a plain static site — no build step.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html              home
pages/*.html            one page per chapter + lab-values.html
assets/css/style.css
assets/js/app.js
assets/img/             38 reference images
```

---

Study aid only. Always follow your facility's protocols and current clinical guidelines.
