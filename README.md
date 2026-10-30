# Erikson Thomas — personal website

A responsive dark personal site for **https://eriksonjthomas.com**, built with HTML, CSS, and JavaScript. No build step or production dependencies. Includes a print-friendly résumé, original SVG illustrations, locally hosted typography, accessibility support, and Cloudflare security headers.

## Preview and check

Requires Node.js 20 or later:

```sh
npm run dev
npm run check
```

Preview: http://127.0.0.1:4173. All public files live in `dist/`.

## Deploy with GitHub + Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, go to **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Select this repository and configure:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `dist` |
| Root directory | Leave blank |

4. Select **Save and Deploy**. Every subsequent push to `main` will redeploy the site.
5. In the Pages project, open **Custom domains → Set up a domain** and add `eriksonjthomas.com`.
6. For the apex domain, the domain must be an active Cloudflare zone in the same account. If it is registered elsewhere, follow Cloudflare’s nameserver instructions at the registrar while preserving any existing mail records. Do not replace unrelated DNS records.
7. Optionally add `www.eriksonjthomas.com` through the same Custom domains flow and configure a redirect to the canonical apex domain.

Official references: [Static HTML deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) · [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

## Editing

- `dist/index.html`: bio, experience, interests, contact links, metadata.
- `dist/styles.css`: site layout, palette, typography, mobile breakpoints.
- `dist/script.js`: contour art and copy-email interaction.
- `dist/resume.html`: résumé text. Keep employment and dates consistent with the home page.
- `dist/resume.css`: screen and print styles. The print button supports browser Save as PDF.
- `dist/assets/signature-white.png`: supplied signature, preserved as provided.

The supplied résumé is the source for the professional details. Arrow International is shown as January 2024–present, as in that résumé. Education years do not imply a degree. No analytics, tracking, cookies, contact-form backend, or external font requests are included.

## Assets

Signature supplied by Erikson Thomas. Topographic, climbing, puzzle, and card illustrations are original code-native artwork. Inter is locally hosted under its SIL Open Font License; see `dist/assets/INTER-LICENSE.txt`.
