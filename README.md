# Portfolio

Source for my personal site, live at <https://javendean.github.io/Portfolio/>.

It is a single static page — hand-written HTML, CSS, and a small amount of vanilla
JavaScript. No framework, no build step. GitHub Pages serves this repository's root on
the `main` branch, so the project files themselves (PDF, PPTX, XLSX, HTML report, R
Markdown) are hosted alongside the page and linked directly from it.

## What is here

| File | What it is |
| --- | --- |
| `index.html` | The site. Intro, finance projects, missionary project, contact. |
| `style.css` | All styling. Dark theme, CSS custom properties, responsive grid. |
| `script.js` | Mobile nav toggle, footer year, hero padding measured off the navbar height. |
| `Data.html` | An earlier version of the page, kept in the repo. Not linked from `index.html`. |

## The work the page links to

- **AmTrust Financial — Solvency II capital assessment** (May 2023, RM 790 coursework).
  Solvency Capital Requirement analysis of a $3.28B invested asset portfolio: Schedule D
  assets pulled from Bloomberg, processed in Excel and R, 10,000-trial scenario simulation
  from Moody's B&H Economic Scenario Generator, quarterly steps over a one-year horizon at
  99.5% confidence. Written up in `AmTrust-Solvency-II-Capital-Assessment-Report.pdf` and
  `AmTrust-Solvency-II-Capital-Assessment-Presentation.pptx`. The Excel and R working files
  are not in this repo.
- **Walmart (WMT) valuation** (Sept 2021). Three-statement model with a DCF, WACC and
  terminal value, sensitivity tables, and a football-field summary chart. The workbook is
  `Walmart Valuation-9-8-21.xlsx`.
- **Google stock returns and volatility** (May 2023). ARIMA for the mean, GARCH for the
  variance, with diagnostics. `FINAL-EXAM-MARKDOWN.html` is the knitted R Markdown report.
- **Housing price prediction** (May 2023, MATH342W). Linear regression, regression tree, and
  random forest on Queens, NY sale prices; best R² was 0.85 from the random forest. Group
  coursework — I was one of four contributors. Source is `final_project.Rmd`, write-up is
  `final_project-Javendean Naipaul.pdf`.
- **Countries needing missionary work** (2024). Research on unreached people groups written
  for the senior pastor of my home church. `Countries_Needing_Missonary_Work.pdf`.

The remaining `.png`, `.jpg`, and `.ai` files are the charts and photos the page displays.

## Running it locally

Open `index.html` in a browser, or serve the directory so relative links behave the same as
they do on Pages:

```
python -m http.server 8000
```

Then visit <http://localhost:8000/>.
