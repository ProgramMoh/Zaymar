# Formspree Setup Complete! ✅

## Environment Variable Setup

1. **Create a `.env.local` file** in the root of your project (if it doesn't exist)
2. **Add your Formspree endpoint**:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT;
   ```
3. **Restart your development server** after adding the environment variable

**Note**: The `.env.local` file is already in `.gitignore` and will not be committed to your repository.

## What's Already Done

✅ Form endpoint is connected in the checkout page
✅ Form data will be sent to Formspree when users submit
✅ All form fields are included (name, email, phone, meeting details, plan info)

## Next Steps: Configure Email Notifications

### 1. Set Up Email Notifications in Formspree

1. **Log into your Formspree account** at [formspree.io](https://formspree.io)
2. **Go to your form settings** (click on the form with ID `mankqgvl`)
3. **Click on "Settings"** or "Notifications" tab
4. **Add your email address** where you want to receive submissions
5. **Enable email notifications** - you'll receive an email every time someone submits the form

### 2. Set Up Auto-Reply (Confirmation Email to Customers)

1. In your Formspree form settings, go to **"Auto-Responder"** or **"Confirmation"**
2. **Enable auto-responder**
3. **Customize the email template** with something like:

```
Subject: Meeting Confirmation - ZAYMAR Creatives

Hi {{name}},

Thank you for scheduling a meeting with ZAYMAR Creatives!

Meeting Details:
- Date: {{date}}
- Time: {{timeStart}} - {{timeEnd}}
- Method: {{meetingMethod}}
- Plan Selected: {{plan}}
- Total: {{total}}

We'll confirm the meeting details shortly and send you any additional information you may need.

If you have any questions, please don't hesitate to contact us at info@zaymar.xyz or (714) 494-4105.

Best regards,
ZAYMAR Creatives Team
```

**Note**: Formspree uses `{{field_name}}` syntax for variables. The available fields from your form are:
- `{{name}}`
- `{{email}}`
- `{{phone}}`
- `{{meetingMethod}}`
- `{{date}}`
- `{{timeStart}}`
- `{{timeEnd}}`
- `{{message}}`
- `{{plan}}`
- `{{planPrice}}`
- `{{addOns}}`
- `{{addOnsTotal}}`
- `{{total}}`

### 3. View Submissions

- All form submissions will appear in your **Formspree dashboard**
- You can view, export, or download submissions as CSV
- Free tier allows up to **50 submissions per month**

### 4. Test the Form

1. Go to your website
2. Add a plan to cart
3. Go to checkout
4. Fill out the form
5. Submit
6. Check:
   - ✅ You receive a notification email (if configured)
   - ✅ Customer receives confirmation email (if auto-responder is set up)
   - ✅ Submission appears in Formspree dashboard

## Form Data Structure

When a form is submitted, Formspree will receive:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "meetingMethod": "Google Meet",
  "date": "2024-12-25",
  "timeStart": "10:00",
  "timeEnd": "11:00",
  "message": "Optional message",
  "plan": "GROWTH",
  "planPrice": 4999,
  "addOns": "SEO Optimization ($299/month), Video Production ($799/month)",
  "addOnsTotal": 1098,
  "total": 6097,
  "timestamp": "2024-12-20T10:30:00.000Z"
}
```

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify the endpoint URL is correct: `https://formspree.io/f/mankqgvl`
- Make sure all required fields are filled

### Not receiving emails?
- Check your Formspree account email settings
- Verify your email address is added to notifications
- Check spam folder
- Make sure auto-responder is enabled if you want customer confirmations

### Need more submissions?
- Free tier: 50 submissions/month
- Paid plans start at $10/month for more submissions
- Upgrade in your Formspree dashboard

## Additional Features (Optional)

### Webhooks
- Set up webhooks to send data to other services (Google Sheets, Airtable, etc.)
- Available in Formspree settings

### Custom Redirect
- You can customize the redirect URL after submission
- Currently set to `/checkout/success`

### Spam Protection
- Formspree includes built-in spam protection
- You can enable additional CAPTCHA if needed

## Support

- Formspree Documentation: https://help.formspree.io
- Formspree Support: support@formspree.io

---

**Your form is ready to use!** 🎉

Just configure the email notifications in your Formspree dashboard and you're all set.

