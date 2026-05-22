# Deployment Guide - SHRC Health Website

## Overview
Your professional healthcare website is ready to deploy! It's 100% static HTML/CSS, so it works on any free hosting platform.

## ⚡ Fastest Option: Cloudflare Pages

**Time to live: 2 minutes**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up for free
3. Click "Create a project"
4. Connect your GitHub repository (or upload files manually)
5. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave blank)
   - **Build output directory**: (leave blank or set to `/`)
6. Deploy!

Result: Your site goes live instantly at a Cloudflare domain

---

## 🐙 GitHub Pages + Custom Domain

**Time to live: 10 minutes + domain setup**

### Push to GitHub:
```bash
git init
git add .
git commit -m "Add SHRC Health professional website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shrchealth.git
git push -u origin main
```

### Enable GitHub Pages:
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Save

Result: Live at `https://YOUR_USERNAME.github.io/shrchealth`

### Add Custom Domain (Optional):
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub Pages settings, add your custom domain
3. Update your domain's DNS records to point to GitHub
4. GitHub will auto-generate an SSL certificate

---

## 📦 Vercel (Easiest with GitHub)

**Time to live: 1 minute**

1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your `shrchealth` repository
5. Click "Deploy"

Result: Live at `https://shrchealth.vercel.app` instantly

---

## 🌐 Netlify

**Time to live: 2 minutes**

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your entire project folder
4. Done!

Result: Live with auto-generated URL

---

## 📋 Pre-Deployment Checklist

Before deploying, customize these details:

### 1. Update Contact Info
Edit `index.html` line ~220:
```html
<p>Phone: <a href="tel:+961XXXXXXXXX">+961 XX XXX XXX</a></p>
<p>Email: <a href="mailto:info@shrchealth.com">info@shrchealth.com</a></p>
<p>Tripoli, Lebanon</p>
```

### 2. Update Team Member Names
Edit Team Section (~line 280):
- Replace placeholder names with real team members
- Update roles and descriptions

### 3. Verify Social Links
All social links are pre-configured to point to:
- YouTube: https://www.youtube.com/channel/UCKnAruS1_PaR3XhLlYxvqaA
- Facebook: https://www.facebook.com/SHRChealth
- Instagram: https://instagram.com/shrchealth
- TikTok: https://www.tiktok.com/@shrchealth/
- LinkedIn: https://www.linkedin.com/company/shrchealth

### 4. Review Testimonials
Update sample testimonials with real patient feedback

---

## 🎨 Optional: Customize Colors

Edit `styles.css` at the top:

```css
:root {
  --primary: #0e74b8;        /* Main blue - change this to your brand color */
  --success: #10b981;        /* Green buttons */
  --text: #14324a;           /* Dark text */
  --bg: #f5f9fc;             /* Light background */
}
```

Common brand colors to try:
- Medical: `#0e74b8` (current)
- Health: `#059669` (green)
- Wellness: `#7c3aed` (purple)
- Care: `#dc2626` (red)

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads on desktop
- [ ] Site works on mobile
- [ ] Navigation links scroll smoothly
- [ ] Social media links work (open in new tab)
- [ ] Contact form displays correctly
- [ ] All text reads clearly
- [ ] Images (if added) display properly

---

## 📊 SEO Setup

The site is already optimized, but you can:

1. Add to Google Search Console
2. Add to Bing Webmaster Tools
3. Share on your social media channels
4. Add your Google Analytics ID to the HTML (optional)

---

## 🚀 Next Steps

### Immediate:
✅ Deploy to your chosen platform

### Within 1 week:
- [ ] Update contact information with real details
- [ ] Add real team member photos
- [ ] Update testimonials with real reviews
- [ ] Set up Google Analytics
- [ ] Add to search engines

### Within 1 month:
- [ ] Start social media promotion
- [ ] Collect patient testimonials
- [ ] Update team member bios
- [ ] Monitor website analytics

---

## 🆘 Troubleshooting

### Site not updating after push?
- GitHub Pages: Wait 1-2 minutes or do a hard refresh (Ctrl+Shift+R)
- Clear browser cache

### Social links not working?
- Check URLs are exactly correct in the `<a href>` tags
- Verify profiles exist on each platform

### Styling looks broken?
- Ensure `styles.css` is in the same folder as `index.html`
- Check file permissions
- Try refreshing with Ctrl+Shift+R

---

## 📞 Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Getting Started](https://docs.netlify.com/)

---

**You're all set! Choose your deployment platform above and go live! 🎉**
