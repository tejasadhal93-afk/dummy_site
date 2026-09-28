# Ghat Road Coffee (dummy static site)

Plain HTML/CSS/JS. No build step. Publish directory = project root.

## Test locally
    python -m http.server 8000     # open http://localhost:8000

## Deploy options

### GitHub Pages
    git init && git add . && git commit -m "first deploy"
    git branch -M main
    git remote add origin https://github.com/<user>/dummy-site.git
    git push -u origin main
Repo Settings -> Pages -> Deploy from branch -> main / (root).

### Netlify
Drag-drop the folder at app.netlify.com/drop, or:
    npm i -g netlify-cli && netlify deploy --prod --dir=.

### Vercel
    npm i -g vercel && vercel --prod
(Framework: Other, no build command, output directory: `.`)

### Cloudflare Pages
Connect the GitHub repo, build command empty, output directory `/`.
