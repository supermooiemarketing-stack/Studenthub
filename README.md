# StudentHub Media Website

A modern, professional website for StudentHub Media - a social media marketing bureau specializing in content creation and brand awareness for small businesses in Groningen.

## 🎨 Design Features

- **Youthful & Professional Color Scheme**: Vibrant blues (#4A90E2), energetic coral (#FF6B6B), and creative purple (#8B5CF6)
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Interactive Elements**: Smooth animations, hover effects, and scroll-triggered animations
- **Modern Typography**: Clean Poppins font family for excellent readability
- **Gradient Backgrounds**: Eye-catching gradient overlays for visual appeal

## 📁 File Structure

```
Studenthub/
├── index.html          # Homepage with hero section and services
├── about.html          # About us page with team profiles
├── contact.html        # Contact page with form and FAQ
├── portfolio.html      # Portfolio page with video showcases
├── styles.css          # Main stylesheet with all styling
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Getting Started

1. **Open the Website**: Simply open `index.html` in your web browser
2. **No Server Required**: This is a static website that runs directly in the browser
3. **All Pages Work**: Navigate between pages using the navigation menu

## 📹 Adding Your Videos to Portfolio

To add your actual videos to the portfolio page:

1. Open `portfolio.html` in a text editor
2. Find the three `<iframe>` elements in the "Featured Projects" section
3. Replace the `src` URLs with your video embed URLs:

### For YouTube Videos:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
```

### For Vimeo Videos:
```html
<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID"></iframe>
```

### How to Get Video Embed URLs:

**YouTube:**
1. Go to your video on YouTube
2. Click "Share" → "Embed"
3. Copy the URL from the `src` attribute

**Vimeo:**
1. Go to your video on Vimeo
2. Click the "Share" button
3. Copy the embed code and extract the URL

## ✏️ Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 11-17):

```css
:root {
    --primary-blue: #4A90E2;      /* Main brand color */
    --accent-coral: #FF6B6B;       /* Energetic accent */
    --accent-purple: #8B5CF6;      /* Creative accent */
    /* ... more colors */
}
```

### Updating Team Information

In `about.html`, find the "Team Section" and update:
- Team member names
- Roles
- Descriptions
- Profile images (replace the emoji placeholders with actual images)

### Modifying Contact Information

Update contact details in all HTML files' footer sections:
- Email address
- Phone number
- Social media links
- Office address

### Customizing the Contact Form

The contact form in `contact.html` currently simulates submission. To make it functional:

1. **Option 1 - Email Service (FormSpree, etc.):**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option 2 - Backend Integration:**
   Modify the form submission in `script.js` to send to your server

## 🎯 Key Features

### Homepage (`index.html`)
- Animated hero section with gradient background
- Services overview cards
- Feature highlights
- Statistics counters
- Call-to-action sections

### About Page (`about.html`)
- Mission statement
- Company values
- Team member profiles
- Business model overview

### Portfolio Page (`portfolio.html`)
- Three featured video showcases
- Project descriptions and stats
- Production process breakdown
- Client testimonials

### Contact Page (`contact.html`)
- Contact information
- Interactive contact form with validation
- Office hours
- FAQ section

## 💡 Interactive Features

- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth page transitions
- **Scroll Animations**: Elements fade in as you scroll
- **Form Validation**: Client-side validation for contact form
- **Scroll to Top Button**: Appears when scrolling down
- **Hover Effects**: Interactive cards and buttons
- **Video Lazy Loading**: Optimized video loading

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #4A90E2 | Main brand color, links, buttons |
| Coral | #FF6B6B | Accents, CTAs |
| Purple | #8B5CF6 | Creative elements, gradients |
| Teal | #14B8A6 | Additional accent |
| Dark | #1E293B | Text, headers |
| Light | #F8FAFC | Backgrounds |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Modern CSS**: Uses CSS Grid, Flexbox, Custom Properties
- **Cross-Browser**: Works on all modern browsers
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized with lazy loading and minimal resources

## 📝 Content Updates

### To Update Services:
Edit the `.services-grid` section in `index.html`

### To Update Testimonials:
Edit the `.testimonials-grid` section in `portfolio.html`

### To Update FAQ:
Edit the `.faq-grid` section in `contact.html`

## 🌐 Deployment

This website can be deployed to:
- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Drag and drop deployment
- **Vercel**: Automated deployments
- **Any Web Host**: Upload files via FTP

### Quick Deploy to GitHub Pages:
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://yourusername.github.io/repository-name`

## 📧 Support

For questions or customization help, contact the StudentHub Media team:
- Email: info@studenthubmedia.nl
- Location: Groningen, Netherlands

## 📄 License

This website was created as part of a Media Entrepreneurship project at Rijksuniversiteit Groningen.

---

**Built with ❤️ by StudentHub Media**
