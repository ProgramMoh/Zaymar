# Image Setup & Cart System Guide

## 📸 Image Generation Instructions

### Where to Place Images
All images should be placed in: `/public/images/`

### Image Prompts for AI Generation

I've created a comprehensive guide in `/public/images/README.md` with all the prompts you need. Here's a quick summary:

#### Hero Images (Required - 5 images)
1. **hero-main.jpg** - Main homepage hero
2. **hero-services.jpg** - Services page hero
3. **hero-about.jpg** - About page hero
4. **hero-pricing.jpg** - Pricing page hero
5. **hero-contact.jpg** - Contact page hero

#### Service Images (Optional - 6 images)
- service-brand-identity.jpg
- service-web-design.jpg
- service-social-media.jpg
- service-marketing-strategy.jpg
- service-content-creation.jpg
- service-digital-experiences.jpg

#### Additional Images (Optional)
- about-team.jpg
- about-values.jpg
- pattern-background.jpg
- gradient-overlay.jpg

### Image Specifications
- **Format**: JPG or PNG
- **Size**: 1920x1080px or larger (for hero images)
- **Style**: Dark, minimalist, professional, Tesla/Apple-inspired
- **File Size**: Keep under 500KB each if possible (compress if needed)

### How Images Are Used
- Hero images are used as background images with dark overlays (30% opacity)
- Images are automatically optimized by Next.js Image component
- If an image is missing, the page will still work but show only the gradient background

## 🛒 Cart System

### Features Implemented
✅ Add plans to cart
✅ Add/remove add-ons
✅ View cart with item count in navigation
✅ Cart page with full functionality
✅ Order summary with totals
✅ Persistent cart state (during session)

### Available Add-ons
The cart system includes 10 pre-configured add-ons:

**Marketing:**
- SEO Optimization ($299/month)
- Email Marketing Campaigns ($199/month)

**Content:**
- Video Production ($799/month)
- Professional Photography ($499/month)
- Extra Content Creation ($249/month)

**Analytics:**
- Advanced Analytics & Reporting ($149/month)

**Social Media:**
- Additional Social Media Accounts ($399/month)

**Branding:**
- Brand Guidelines Documentation ($599/month)

**Support:**
- Team Training Session ($349/month)
- Priority Support ($199/month)

### How to Customize Add-ons
Edit `/contexts/CartContext.tsx` and modify the `addOns` array. You can:
- Change prices
- Modify descriptions
- Add/remove add-ons
- Change categories

### Cart Pages
- **Pricing Page** (`/pricing`) - Select plans and add to cart
- **Cart Page** (`/cart`) - View cart, manage items, add add-ons, checkout

### Navigation
- Cart icon appears in the navigation bar
- Shows item count badge when cart has items
- Click to go to cart page

## 🚀 Next Steps

1. **Generate Images**: Use the prompts in `/public/images/README.md` with Google's AI image tool
2. **Place Images**: Save generated images in `/public/images/` with the exact filenames
3. **Test Cart**: 
   - Go to `/pricing`
   - Add a plan to cart
   - Add some add-ons
   - View cart at `/cart`
4. **Customize Add-ons**: Edit the add-ons in `CartContext.tsx` to match your actual offerings
5. **Connect Checkout**: The "Proceed to Checkout" button is ready for you to connect to your payment processor

## 📝 Notes

- Images are optional - the site works without them (shows gradients only)
- Cart state persists during the browser session
- All prices are in USD and can be customized
- The Signature plan shows "Custom Pricing" and links to contact form
- Cart icon adapts to light/dark navigation themes

