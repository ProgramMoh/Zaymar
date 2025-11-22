# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js website to GitHub Pages.

## Prerequisites

1. Your code is already pushed to a GitHub repository
2. You have a GitHub account with the repository

## Step-by-Step Setup

### 1. Configure Next.js for GitHub Pages

The `next.config.js` has been updated to support static export. If your repository name is **not** `Zaymar`, you need to update the base path:

1. Open `next.config.js`
2. Uncomment and update these lines:
   ```javascript
   basePath: '/YOUR_REPO_NAME',
   trailingSlash: true,
   ```
   Replace `YOUR_REPO_NAME` with your actual GitHub repository name.

### 2. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository on GitHub.com
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Add Environment Variable to GitHub Secrets

1. Go to your repository on GitHub.com
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Value: Your Formspree endpoint (e.g., `https://formspree.io/f/mankqgvl`)
6. Click **Add secret**

### 4. Push Your Code

The GitHub Actions workflow will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 5. Wait for Deployment

1. Go to your repository on GitHub.com
2. Click on the **Actions** tab
3. You'll see the deployment workflow running
4. Wait for it to complete (usually 2-3 minutes)
5. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
# You can then push the 'out' directory to the gh-pages branch
```

However, the GitHub Actions method is recommended as it's automated.

## Troubleshooting

### Site shows 404 or blank page
- Check that `basePath` in `next.config.js` matches your repository name
- Make sure `trailingSlash: true` is enabled
- Verify GitHub Pages is set to use "GitHub Actions" as the source

### Environment variables not working
- Make sure you added `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to GitHub Secrets
- The variable name must match exactly (case-sensitive)
- Redeploy after adding secrets

### Build fails
- Check the Actions tab for error messages
- Make sure all dependencies are in `package.json`
- Verify Node.js version is 18+ (configured in workflow)

### Images not loading
- Images are set to `unoptimized: true` for static export
- Make sure image paths are correct
- Check that images are in the `public` folder

## Updating Your Site

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages

No manual steps needed!

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Important Notes

- ⚠️ GitHub Pages only serves static files (no server-side features)
- ✅ Your form will still work via Formspree (client-side submission)
- ✅ All features should work except server-side rendering
- ⚠️ The site will be public (GitHub Pages are public by default)

## Your Site URL

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

