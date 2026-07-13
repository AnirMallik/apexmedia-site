# ApexMedia - Inbound Marketing Website

A clean, modern static site for ApexMedia hosted on Cloudflare Pages.

## Pages

- **Home** — Hero and value propositions
- **About Us** — Company story and mission
- **Services** — Service offerings with details
- **Contact** — Contact form (powered by Formspree)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up contact form:**
   - Go to [formspree.io](https://formspree.io)
   - Create a new form
   - Copy your form ID
   - Replace `YOUR_FORMSPREE_ID` in `app/app/contact/page.js` with your actual ID

3. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

## Deploy to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Select **Pages** → **Create a project**
4. Select your GitHub repo
5. Set build command: `npm run build`
6. Set output folder: `out`
7. Click **Deploy**

### Option 2: Via Wrangler CLI

```bash
npm install -g @cloudflare/wrangler
wrangler pages deploy out
```

## Connecting Your Cloudflare Domain

1. In Cloudflare dashboard, go to your domain
2. Add a **CNAME record** pointing to your Pages deployment
3. Or use **Cloudflare Pages custom domain** settings to connect directly

## Contact Form Setup

Contact form submissions go directly to your Formspree email - no backend needed!

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `app/app/contact/page.js` with your ID
4. Push to GitHub and redeploy

## Local Development & Build

```bash
npm run dev        # Start dev server on :3000
npm run build      # Generate static files in ./out
npm start          # Serve static build
```

The site is fully static and optimized for SEO with zero backend complexity.
