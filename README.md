# VidyaSetu 📚

**Free, interactive smart-classroom education — built for village schools.**

VidyaSetu is a curriculum-driven learning platform that turns NCERT-syllabus chapters into interactive lessons: source-verified theory, real textbook activities, quiz questions grounded in the actual chapter content, and hands-on canvas-based simulations ("labs") for the topics that benefit from them.

Live site: https://vidyasetu-coral.vercel.app

## What's inside

Every chapter is built topic-by-topic and cross-checked against the real NCERT chapter text — no invented or approximated content. Current coverage:

| Class | Subject | Chapters |
|---|---|---|
| 6 | Science | 12 (full "Curiosity" textbook) |
| 6 | Mathematics | 5 (Perimeter & Area → Integers) |
| 7 | Mathematics | in progress |
| 8 | Science | 1 |
| 10 | Science | 13 (full textbook) |
| 10 | Mathematics | 14 (full textbook) |

Each topic typically includes:
- **Theory**, written from and cross-referenced against the source chapter
- **Activities**, drawn from the textbook's actual hands-on exercises
- **Quiz questions**, grounded in real chapter examples and figures — never generic filler
- **Interactive labs**, where the content supports it — canvas-based simulations (e.g. a magnet explorer, a fraction-strip builder, a number-machine formula detective, a transversal/parallel-lines angle simulator) that let a student manipulate a variable and see the concept respond live
- A **Chapter Textbook** viewer, one PDF per chapter, navigable from the sidebar

## Tech stack

- [Vite](https://vitejs.dev/) + vanilla JavaScript (no framework) — hash-based routing, DOM built directly via template strings
- Plain CSS with light/dark theme support
- No backend — the entire curriculum lives in `src/js/data.js` as a single data tree; labs are self-contained canvas widgets in `src/js/pages/topic-detail.js`

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

### Adding chapter textbook PDFs

The "Chapter Textbook" viewer looks for a file named after the chapter's id at `public/textbooks/{chapterId}.pdf` (e.g. `public/textbooks/10s-8.pdf` for the Class 10 Science "Heredity" chapter — match the `id` field of the chapter in `src/js/data.js`). These PDF files are **not included in this repository** — see [Licensing & third-party content](#licensing--third-party-content) below for why, and add your own local copies to use the feature.

## Project structure

```
src/
  js/
    data.js                 # the entire curriculum: classes → subjects → chapters → topics
    router.js                # hash-based router
    pages/
      home.js, classes.js, class-detail.js, subject-detail.js
      topic-detail.js         # renders theory/activities/quiz + all interactive labs
      chapter-textbook.js      # per-chapter PDF viewer
  style.css
public/
  textbooks/                 # drop your own chapter PDFs here (gitignored)
```

## Contributing

Contributions are welcome — new chapters, new labs, bug fixes, or corrections to existing content are all useful. A few guidelines specific to this project:

- **Source-verify everything.** Theory, activities, and quiz questions should be traceable back to the actual NCERT chapter text — no fabricated or approximated content. If you're adding a chapter, work from the real textbook PDF/text alongside the official solutions where available.
- **Match the existing data shape.** Each topic in `data.js` follows the same shape: `theory: { intro, sections: [{ heading, text }] }`, `activities: [{ title, objective, materials, steps, observation }]` (only the first activity is rendered), and `quiz: [{ question, options, answer, explanation }]`.
- **Labs follow a 4-part pattern** in `topic-detail.js`: an HTML template constant, a dispatch entry in the render chain, a dispatch entry in the init chain, and the `initXyzLab()` function itself — grep for an existing lab type (e.g. `resource-sorter-sim`) to see the pattern before adding a new one.
- After any change to `data.js` or `topic-detail.js`, run `npm run build` and confirm it completes cleanly before opening a PR.

## Licensing & third-party content

The source code in this repository is released under the [MIT License](./LICENSE) — free to use, modify, and redistribute.

**NCERT textbook PDFs are not included in this repository.** NCERT's official reprint PDFs carry their own copyright and, on many pages, an explicit "not to be republished" notice — that's a restriction on redistribution, independent of attribution, so hosting copies here isn't something this project can do regardless of credit given. Chapter content (theory, activities, quiz questions) in `data.js` is original writing that follows the syllabus and structure of the corresponding NCERT chapters; NCERT retains all rights to its own original text, illustrations, and PDF files. If you want the "Chapter Textbook" viewer feature working locally, download the relevant official PDFs yourself from [ncert.nic.in](https://ncert.nic.in/) and drop them into `public/textbooks/` as described above.

## Acknowledgements

Curriculum structure and chapter content follow the NCERT syllabus (Ganita Prakash, Curiosity, and other current NCERT textbook series). This project exists to make that syllabus more interactive and accessible, not to replace or redistribute NCERT's own materials.
