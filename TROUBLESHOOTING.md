# GitHub Pages Troubleshooting

## Issue: Seeing README instead of website

This means GitHub Pages isn't using your built site. Follow these steps:

### Step 1: Check GitHub Pages Settings

1. Go to your repository on GitHub.com
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, make sure it says **"GitHub Actions"** (NOT "Deploy from a branch")
4. If it's set to a branch, change it to **"GitHub Actions"**
5. Save

### Step 2: Check if Workflow Ran

1. Go to your repository on GitHub.com
2. Click the **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow
4. If you see a yellow dot (in progress) or red X (failed), click on it to see details
5. If you don't see any workflow runs, the workflow file might not be committed

### Step 3: Make Sure Workflow File is Committed

Run these commands in your terminal:

```bash
# Check if the workflow file exists
ls -la .github/workflows/

# If it doesn't exist or wasn't committed, add and push it
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Step 4: Manually Trigger Workflow (if needed)

1. Go to **Actions** tab on GitHub
2. Click on "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click **"Run workflow"**
6. Wait for it to complete (2-3 minutes)

### Step 5: Verify Deployment

1. After workflow completes (green checkmark), go to **Settings** → **Pages**
2. You should see: "Your site is live at https://YOUR_USERNAME.github.io/Zaymar/"
3. Wait 1-2 minutes for DNS to propagate
4. Visit the URL

### Common Issues

#### Workflow fails with "NEXT_PUBLIC_FORMSPREE_ENDPOINT not found"
- Go to **Settings** → **Secrets and variables** → **Actions**
- Make sure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` secret exists
- If not, add it with your Formspree endpoint URL

#### Workflow succeeds but site still shows README
- Make sure GitHub Pages Source is set to **"GitHub Actions"** (not a branch)
- Clear your browser cache
- Try incognito/private browsing mode
- Wait 5-10 minutes for changes to propagate

#### 404 errors on pages
- Check that `basePath: '/Zaymar'` in `next.config.js` matches your repository name exactly
- Make sure `trailingSlash: true` is set
- Rebuild and redeploy

### Quick Fix Commands

If you need to force a rebuild:

```bash
# Make a small change to trigger workflow
echo "# Deployment trigger" >> README.md
git add .
git commit -m "Trigger deployment"
git push origin main
```

Then go to Actions tab and wait for deployment to complete.

