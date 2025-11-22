# Environment Variables Setup

This project uses environment variables to store sensitive information like API endpoints. These should **never** be committed to your repository.

## Quick Setup

1. **Create a `.env.local` file** in the root of your project:
   ```bash
   touch .env.local
   ```

2. **Add your environment variables** to `.env.local`:

3. **Restart your development server** after creating/updating `.env.local`

## Environment Variables

### `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- **Required**: Yes
- **Description**: Your Formspree form endpoint URL
- **Where to get it**: [Formspree Dashboard](https://formspree.io)

## Security Notes

✅ **`.env.local` is already in `.gitignore`** - it will not be committed to your repository

✅ **Only use `NEXT_PUBLIC_` prefix** for variables that need to be accessible in the browser

❌ **Never commit** `.env.local` or any file containing actual credentials

❌ **Never share** your environment variables publicly

## For Production Deployment

When deploying to production (Vercel, Netlify, etc.), you need to add these environment variables in your hosting platform's dashboard:

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with its value
4. Redeploy your application

### Netlify
1. Go to Site settings
2. Navigate to "Environment variables"
3. Add each variable with its value
4. Redeploy your site

### Other Platforms
Check your hosting platform's documentation for how to add environment variables.

## Troubleshooting

### "Formspree endpoint is not configured" error
- Make sure `.env.local` exists in the root directory
- Verify the variable name is exactly: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- Restart your development server after creating/updating `.env.local`
- Check that there are no typos in the variable name or value

### Environment variables not working in production
- Make sure you've added the variables in your hosting platform's dashboard
- Verify the variable names match exactly (case-sensitive)
- Redeploy your application after adding variables



**Remember**: This file should never be committed to git!

