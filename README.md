# Tom Vandebroek Portfolio

Modern multi-page portfolio website built with HTML, CSS, and JavaScript, served with Vite.

## Run locally

```bash
npm install
npm run dev
```

Local URL: `http://localhost:5173/`

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (automatic)

This repository includes a workflow at `.github/workflows/deploy.yml`.

1. Push all changes to the `main` branch.
2. In your repository, go to **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as source.
4. The workflow will build and publish `dist/` automatically.

## Domain and cost

- Free option: GitHub Pages URL
	- User site: https://tomvandebroek.github.io
	- Project site: https://tomvandebroek.github.io/<repository-name>/
- Paid option: custom domain (for example .be, .com, .dev)
	- Domain registration is usually paid yearly through a domain registrar.
	- GitHub Pages hosting itself remains free.

## Contact form on static hosting

The contact form uses FormSubmit and works on GitHub Pages without a backend.

On first submit, FormSubmit asks for email activation. Confirm that email once, then submissions will be delivered.
