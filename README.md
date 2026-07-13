# Leon Unlimited Construction — Website

A static, mobile-friendly one-page site for Leon Unlimited Construction (Van Nuys, CA), built to be hosted free on **GitHub Pages**.

## What's in here
```
index.html                the whole site (hero, services, gallery, about, process, reviews, service area, contact)
css/styles.css             all styling
js/script.js               mobile menu, quote form, and gallery lightbox behavior
assets/leon-logo.jpg        logo for light backgrounds (header)
assets/leon-logo-transparent.png   logo for dark backgrounds (footer)
images/gallery/             8 project photos, resized & compressed for web
images/video/                2 job walkthrough videos, compressed for web + poster thumbnails
```

All photos and videos were resized/compressed from your originals (EXIF data stripped for privacy) so the page still loads fast — total site weight is about 13MB, mostly the two videos.

**Note:** `whole_house_remodel.MP4` and `Marco_restroom.MP4` were identical files when uploaded, so only one video ("Marco's bathroom remodel") made it onto the site. If you have a separate whole-house walkthrough video, send it over and I'll swap it in.

No build step, no dependencies — just HTML/CSS/JS. Google Fonts (Oswald, IBM Plex Sans, IBM Plex Mono) load from a CDN.

## Before you publish — 2 things to fix

1. **Quote form email** — `js/script.js` currently sends quote-request emails to a placeholder address (`leonunlimitedinc@gmail.com`). Open that file and replace it with the real inbox you want quote requests to land in.
2. **Phone number** — every "Call" / "Text" link uses `(818) 437-6751` from your Craigslist ad. Double check that's still the number you want featured everywhere.

## Publish it on GitHub Pages (free hosting)

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click the **+** in the top right → **New repository**.
   - Name it something like `leon-unlimited-website`.
   - Set it to **Public** (required for free GitHub Pages).
   - Don't add a README/gitignore — you already have files.
3. On the empty repo page, click **uploading an existing file** and drag in `index.html`, the `css` folder, and the `js` folder (keep the folder structure).
4. Commit the files (green "Commit changes" button).
5. In the repo, go to **Settings → Pages** (left sidebar).
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
8. Wait 1–2 minutes, then refresh — GitHub will show your live URL, typically:
   ```
   https://YOUR-USERNAME.github.io/leon-unlimited-website/
   ```

That link is what you can now add to your Google Business Profile (the one you mentioned doesn't have a website yet), Facebook, Thumbtack, and Yelp.

## Optional next steps
- **Custom domain** (e.g. `leonunlimitedconstruction.com`): buy it from any registrar, then add it under Settings → Pages → Custom domain, and set a `CNAME` DNS record pointing to `YOUR-USERNAME.github.io`.
- **Real photos**: swap in actual job-site photos from your Facebook/Thumbtack galleries in place of the illustrated icons for even more trust — just drop images into the `images/` folder and reference them in `index.html`.
- **Analytics**: add a free [Plausible](https://plausible.io) or Google Analytics snippet before `</head>` if you want to see visitor traffic.
