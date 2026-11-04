# Profile Picture Setup

The site uses two copies of the photo:

- `profile.webp` – shown on the page (set in `src/data/cvData.js`)
- `profile.jpg` – used for link previews (`og:image` in `index.html`)

Keep both small. The photo displays at 200px, so 600×800 is plenty:

```bash
convert original.jpg -resize 600x800 -strip -quality 82 profile.webp
convert original.jpg -resize 600x800 -strip -interlace Plane -quality 82 profile.jpg
```
