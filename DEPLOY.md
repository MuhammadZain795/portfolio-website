# Deploy `itsmzain.com`

## What you have
A static site — 3 files. No build step. Drop it on any host.

```
itsmzain-portfolio/
├── index.html
├── styles.css
└── favicon.svg
```

## Before you deploy

✅ Calendly link wired in (`calendly.com/muhammadzainulabdin`)
✅ LinkedIn link wired in (`linkedin.com/in/muhammadzain795`)
✅ Profile photo added (`profile.jpg`)

Still to do — open `index.html` and search/replace:

| Placeholder | Replace with |
|---|---|
| `YOUR-FORMSPREE-ID` | Your Formspree form ID (sign up free at formspree.io) |
| `og-image.png` (optional) | A 1200×630 social preview image — put it next to `index.html` |

If you skip Formspree, the form's Send button just won't deliver. The Calendly card, email link, and LinkedIn card still work fine.

---

## Option A — GoDaddy Web Hosting (cPanel)
Best if you bought a hosting plan with the domain.

1. GoDaddy dashboard → **My Products** → **Web Hosting** → **Manage** → **cPanel Admin**.
2. Open **File Manager** → `public_html/`.
3. Delete any default `index.html` GoDaddy placed there.
4. Click **Upload**, drag in: `index.html`, `styles.css`, `favicon.svg`.
5. Visit `https://itsmzain.com` — done.

If `itsmzain.com` shows a default page: in cPanel, check **Domains** → ensure `itsmzain.com` points to `public_html/`.

## Option B — GoDaddy Website Builder (Airo)
Airo doesn't accept custom HTML. **Skip Airo** — use Option A or C.

## Option C — Free hosting + point GoDaddy DNS (recommended)
Cloudflare Pages / Netlify / Vercel are faster than GoDaddy shared hosting, free, and give you HTTPS automatically.

### Cloudflare Pages (free, fastest)
1. Sign up at `pages.cloudflare.com`.
2. **Create a project** → **Direct upload** → drag the 3 files in.
3. You get a `*.pages.dev` URL. Test the site there first.
4. In Cloudflare Pages → **Custom domains** → add `itsmzain.com` and `www.itsmzain.com`.
5. In GoDaddy: **DNS Management** → add the CNAME/A records Cloudflare shows you.
6. Wait 5–30 min for DNS propagation. HTTPS is automatic.

### Netlify (drag-and-drop)
1. Sign up at `app.netlify.com`.
2. Drag the project folder onto the dashboard. Instant deploy.
3. **Domain settings** → add `itsmzain.com`.
4. Netlify shows you DNS records → add them in GoDaddy.

---

## After it's live (do these in week 1)

- [ ] Submit the site to **Google Search Console** (`search.google.com/search-console`).
- [ ] Add Google Analytics or Plausible.
- [ ] Create the `og-image.png` (1200×630) and re-upload — your LinkedIn link previews will look professional.
- [ ] Add the URL to your **LinkedIn profile** (Contact Info → Website).
- [ ] Add the URL to your **email signature**.
- [ ] Set up the Formspree form so submissions hit your inbox.

## Editing later
Every section is plain HTML. To add a case study, copy any existing `<article class="case">` block in `index.html` and edit the text. To change colors, edit the CSS variables at the top of `styles.css` (`--accent`, `--ink`, etc.).
