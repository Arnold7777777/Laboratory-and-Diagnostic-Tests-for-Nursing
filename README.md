# Laboratory & Diagnostic Tests — Nursing Study Guide

**Live:** https://arnold7777777.github.io/Laboratory-and-Diagnostic-Tests-for-Nursing/

An ADHD-friendly visual study guide covering **140 tests and lab values**, built from
*Mosby's Manual of Diagnostic and Laboratory Tests* (ch. 1, 3, 4, 6, 7, 8, 9) and
*Saunders Comprehensive Review for the NCLEX-RN* (ch. 8, 9, 10).

## Why it looks like this

Designed for people who lose the thread in a wall of text:

- **Nothing is open until you open it.** Every test is a collapsed card. Click one and you see
  one test — not a hundred and forty.
- **Collapsible left sidebar** holds the chapter menu *and* the contents of the page you're on.
  Hamburger button hides it entirely when you want the width.
- **Focus mode** dims every card except the one you're reading.
- **Jewel-glass cards over the artwork** — each chapter has its own gemstone tint, translucent
  so the background reads through. `Art` turns the artwork up; `💎 Jewel look` swaps to a plain
  high-contrast theme.
- **Colour = meaning.** Green normal · yellow numbers to memorise · red *don't* ·
  orange *what can go wrong* · purple *pyramid point*.
- **The same five questions every time.** What's normal → why order it → who can't have it →
  before/during/after → what abnormal means.
- **Text size and font toggles** (`A+` / `Aa`). Every preference is remembered.
- **Press `/`** anywhere to search.
- **38 infographics** placed where they're relevant; click any to view full size.

## Pages

| Page | What's in it |
|------|--------------|
| **Find a Test** | All 140 tests grouped by body system, then A–Z. The page to bookmark. |
| Ch. 1 Foundations | Precautions, specimen handling, the variables that skew a result |
| Ch. 4 Endoscopy | 14 tests |
| Ch. 6 Manometry | 5 tests |
| Ch. 8 Nuclear Scanning | 22 tests |
| Ch. 3 Electrodiagnostic | 13 tests |
| Ch. 7 Micro & Biopsy | 35 tests |
| Ch. 9 Stool Tests | 7 tests |
| **Blood Work** | 21 topics — sodium through WBC, plus vital signs *(Saunders ch. 10)* |
| **Fluids & ABGs** | 23 topics — every electrolyte high/low, fluid balance, ABG interpretation *(Saunders ch. 8–9)* |
| **Visual Reference** | All 38 infographics on one scrollable page |

## Running it locally

Plain static site, no build step.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Structure

```
index.html              home
pages/*.html            chapters, blood work, fluids, find-a-test, lab-values
assets/css/style.css    light theme + jewel theme + rail nav
assets/js/app.js        accordions, search, rail, preference toggles
assets/img/             39 images
```

---

Study aid only. Always follow your facility's protocols and current clinical guidelines.
