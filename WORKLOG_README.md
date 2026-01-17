# Work Log Setup

This site uses [11ty (Eleventy)](https://www.11ty.dev/) to generate the work log page while keeping your existing HTML pages intact.

## Quick Workflow: Adding a New Work Log Entry

1. **Add your photo to the images directory:**
   ```bash
   # Copy your image to the worklog images folder
   cp /path/to/your/photo.jpg images/worklog/2026-01-17-project-name.jpg
   ```

2. **Add entry to the JSON data file:**
   Edit `_data/worklog.json` and add a new entry:
   ```json
   {
     "entries": [
       {
         "date": "2026-01-17",
         "image": "/images/worklog/2026-01-17-project-name.jpg",
         "caption": "Description of the work you did today."
       },
       ... existing entries ...
     ]
   }
   ```

3. **Commit and push:**
   ```bash
   git add images/worklog/*.jpg _data/worklog.json
   git commit -m "Add work log entry for 2026-01-17"
   git push
   ```

Cloudflare Pages will automatically rebuild and deploy your site!

## Local Development

### First Time Setup
```bash
npm install
```

### Build the site
```bash
npm run build
```
Output will be in the `_site/` directory.

### Development server with live reload
```bash
npm start
```
Visit `http://localhost:8080` to preview your site.

## How It Works

- **Existing HTML files** (`index.html`, `about.html`, `contact.html`, `resources.html`) are copied as-is to `_site/`
- **Work log page** is generated from `worklog.njk` template using data from `_data/worklog.json`
- **Images** are copied from `images/` to `_site/images/`
- Entries are displayed in reverse chronological order (newest first)

## File Structure

```
tts/
├── _data/
│   └── worklog.json          # Work log data
├── _site/                    # Generated site (git ignored)
├── images/
│   └── worklog/              # Work log photos
├── index.html                # Static pages (copied as-is)
├── about.html
├── contact.html
├── resources.html
├── worklog.njk               # 11ty template for work log
├── .eleventy.js              # 11ty configuration
└── package.json              # Node dependencies
```

## Cloudflare Pages Configuration

Set these in your Cloudflare Pages project settings:

- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Node version:** 18 or higher

## Tips

- **Image naming:** Use descriptive names like `2026-01-17-network-install.jpg` for easy organization
- **Image size:** Optimize photos before uploading (recommended max width: 1200px)
- **Entry order:** New entries should be added at the top of the `entries` array for convenience
- **Dates:** Use YYYY-MM-DD format for consistency
