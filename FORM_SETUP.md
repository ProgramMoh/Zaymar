# Form Submission Setup Guide

This guide explains how to set up form submission for the checkout page without requiring a backend server or database.

## Options for Form Submission

### Option 1: Formspree (Recommended - Easiest)
**Free Tier**: 50 submissions/month

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Update `/app/checkout/page.tsx` line ~120:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
5. Set up email notifications in Formspree dashboard
6. Formspree will automatically send emails to the addresses you configure

**Pros**: 
- No code changes needed (just replace the URL)
- Automatic email notifications
- Can view submissions in dashboard
- Free tier is generous

**Cons**: 
- Limited to 50 submissions/month on free tier
- Paid plans start at $10/month for more submissions

---

### Option 2: EmailJS (Good for Email-Only)
**Free Tier**: 200 emails/month

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
6. Create `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
7. Uncomment the EmailJS code in `/app/checkout/page.tsx` (lines ~100-120)

**Pros**: 
- Free tier: 200 emails/month
- Direct email sending
- Good for confirmation emails

**Cons**: 
- Doesn't store submissions (email only)
- Need to set up email templates
- More configuration required

---

### Option 3: Vercel Serverless Functions (Best for Storage)
**Free Tier**: Generous limits

1. Create `/app/api/submit/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server'
   import { Resend } from 'resend' // or use nodemailer
   
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   export async function POST(request: Request) {
     try {
       const data = await request.json()
       
       // Send email
       await resend.emails.send({
         from: 'info@zaymar.xyz',
         to: data.email,
         subject: 'Meeting Confirmation - ZAYMAR Creatives',
         html: `Your meeting has been scheduled...`,
       })
       
       // Save to Google Sheets (optional)
       // Or use a service like Airtable, Notion API, etc.
       
       return NextResponse.json({ success: true })
     } catch (error) {
       return NextResponse.json({ error: 'Failed' }, { status: 500 })
     }
   }
   ```
2. Use Resend (free tier: 3,000 emails/month) or Nodemailer
3. For storage, use:
   - **Google Sheets API** (free)
   - **Airtable API** (free tier: 1,200 records/base)
   - **Notion API** (free)
   - **Supabase** (free tier: 500MB database)

**Pros**: 
- Full control
- Can store data
- Scalable
- Free tier is generous

**Cons**: 
- Requires more setup
- Need to handle email service separately

---

### Option 4: Google Sheets + Apps Script (Free & Simple)
**Free**: Unlimited submissions

1. Create a Google Sheet
2. Set up Google Apps Script to receive webhook data
3. Use a service like Zapier (free tier: 100 tasks/month) or Make.com
4. Or use Google Sheets API directly from your form

**Pros**: 
- Completely free
- Easy to view/manage submissions
- Can set up email notifications via Apps Script

**Cons**: 
- Requires Google Apps Script knowledge
- Less professional than dedicated services

---

## Recommended Setup

For your use case, I recommend **Formspree** because:
1. ✅ Easiest to set up (just replace one URL)
2. ✅ Automatic email notifications
3. ✅ Can view all submissions in dashboard
4. ✅ Free tier (50/month) is usually enough to start
5. ✅ No backend code needed
6. ✅ Professional and reliable

## Email Template Setup

When setting up your email service, include these fields in the confirmation email:
- Customer name
- Meeting date and time
- Meeting method
- Selected plan
- Total cost
- Contact information

## Storage Options (If Needed)

If you want to store submissions beyond email:

1. **Airtable** (Recommended)
   - Free tier: 1,200 records per base
   - Easy to set up
   - Great UI for viewing submissions
   - Can integrate with Zapier for automation

2. **Google Sheets**
   - Free and unlimited
   - Easy to view/manage
   - Can use Google Apps Script for automation

3. **Notion Database**
   - Free
   - Great for team collaboration
   - Can create custom views

## Next Steps

1. Choose your preferred option
2. Set up the service
3. Update the form submission code in `/app/checkout/page.tsx`
4. Test the form submission
5. Set up email templates
6. Configure storage (if needed)

## Testing

After setup, test the form by:
1. Adding a plan to cart
2. Going to checkout
3. Filling out the form
4. Submitting
5. Checking your email
6. Verifying the submission was received/stored

