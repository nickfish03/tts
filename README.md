# Toad Town Services

Website for toadtownservices.com, built with [Eleventy](https://www.11ty.dev/) and hosted on Cloudflare Pages.

## Where things live

| To change... | Edit |
|---|---|
| The menu (nav links) | `_includes/nav.njk` |
| The footer, `<head>` tags, or anything on every page | `_includes/base.njk` |
| The contact box (button + call/email reveal) | `_includes/contact-box.njk` |
| The page banner (logo + title + subtitle) | `_includes/page-header.njk`; each page sets its own title and subtitle |
| The phone number or email address | `_includes/contact-script.njk` (base64-encoded) |
| Styles shared by every page | `css/site.css` |
| One page's content or its own styles | that page's `.njk` file (`index`, `about`, `projects`, `resources`, `rates`, `contact`) |
| Project cards | `_data/projects.json` (see `PROJECTS_README.md`) |

Each page starts with front matter (`title`, `description`, `permalink`), extends `base.njk`,
and has a `styles` block for page-only CSS and a `content` block for the page itself.
To add the contact box to a page:

```njk
{% from "contact-box.njk" import contactBox %}
{{ contactBox("Heading", "One intro sentence.") }}
```

## Working on it

- `npm start` — local preview at http://localhost:8080 with live reload
- `npm run build` — build into `_site/`

`why-toad.html` and `worklog.njk` are redirects so old links keep working.
