# Johnson Prem B — Mechanical Design Portfolio

A responsive portfolio website for Johnson Prem B, featuring 16 CAD and design projects, interactive project filters, project detail overlays, experience, skills, academic projects, certifications, and a downloadable resume.

## Included
- `index.html` — website content and layout
- `style.css` — responsive styling and motion effects
- `script.js` — project filters, project detail modal, navigation, and ambient background
- `assets/` — project images and `Johnson-Prem-B-Resume.pdf`

## Preview locally
Open `index.html` in a browser. For a local server, run:

```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository (for example, `mechanical-design-portfolio`).
2. Upload the contents of this folder to the repository root. Keep the `assets` folder beside `index.html`.
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The resume download link is served from `assets/Johnson-Prem-B-Resume.pdf`.


## What changed in this version
- Every project image now matches its title (several files were mislabeled or duplicated). Images are WebP: 6.5 MB down to about 1.1 MB.
- `enhance.js` / `enhance.css`: cursor-reactive 3D tilt, parallax and glare on images, custom "VIEW" cursor, magnetic buttons, stat counters, reviews, working contact form, richer project modal with gallery and prev/next, keyboard navigation and focus trap.
- `case.js` / `case.css`: two featured case studies (Options & Variants, EV battery pack) with project views, interactive workflow, gallery and zoom lightbox. Content lives in the `CASES` object at the top of `case.js`.
- `assets/ov-*.svg`, `assets/ev-*.svg`: illustrative diagrams (each carries an ILLUSTRATIVE tag). To use real screenshots, add files to `assets/` and change the gallery file names in `case.js`.
