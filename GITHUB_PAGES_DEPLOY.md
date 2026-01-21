# GitHub Pages Deployment Guide

This portfolio is configured for deployment to GitHub Pages. Follow these steps to deploy:

## Automatic Deployment (Recommended)

1. **Push to GitHub**: Create a new repository and push this code to GitHub
2. **Enable GitHub Pages**: 
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
3. **Trigger Deployment**: Push to the `main` branch to trigger automatic deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site.

## Manual Deployment

If you prefer to build and deploy manually:

1. **Build the project**:
   ```bash
   npx vite build --config vite.config.gh-pages.ts
   node scripts/post-build-gh-pages.js
   ```

2. **Deploy the `dist/public` folder** to GitHub Pages using your preferred method

## Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in `client/public/` with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable HTTPS in repository Settings → Pages

## Base URL Configuration

If deploying to a subdirectory (e.g., `username.github.io/repo-name`):

1. Edit `vite.config.gh-pages.ts`
2. Change `base: "./"` to `base: "/your-repo-name/"`

## Notes

- The contact form uses `mailto:` links for GitHub Pages compatibility (no backend required)
- All assets are bundled and work offline
- Client-side routing is handled via `404.html` redirect
