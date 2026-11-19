# Projects Page

The Projects page (`/projects/`) is built by 11ty (Eleventy) from `_data/projects.json`.
The homepage's "Recent Projects" box shows every project marked `"featured": true`.

## Adding a project

Add a project when a job is worth showing off, not on a schedule. Four to eight
projects total is plenty, so retire older ones as better examples come along.

1. (Optional) Add a photo to `images/projects/`. Use lowercase names with dashes, no spaces,
   and resize it first so it loads quickly on rural internet:
   ```bash
   convert original.jpg -auto-orient -resize '1600x1600>' -strip -quality 80 images/projects/short-name.jpg
   ```

2. Add an entry to `_data/projects.json`:
   ```json
   {
     "title": "Short Project Name",
     "category": "Home",
     "featured": false,
     "need": "What the client needed, in one or two plain sentences.",
     "did": "What I did.",
     "result": "How it turned out for them.",
     "image": "/images/projects/short-name.jpg",
     "imageAlt": "Description of the photo",
     "link": "https://optional-link",
     "linkText": "Optional link text"
   }
   ```
   `category` is one of: `Home`, `Business & Nonprofit`, `Audio & Video`.
   `image`, `imageAlt`, `link`, and `linkText` are optional. Projects appear in the order listed.

3. Get the client's OK before naming them; otherwise keep it general ("a Wausau-area church").

4. Preview with `npm start`, then commit and push.

## Redirects

`worklog.njk` and `why-toad.html` are small redirect pages so old links keep working.
The Why Toad story now lives at `/about.html#why-toad`.
