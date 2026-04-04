# The Artisan Brew - Café Landing Page
## Product Requirements Document

**Created:** December 2024
**Last Updated:** December 2024

---

## Original Problem Statement

Create a visually striking, fully animated landing page for a café and restaurant that stands out globally while feeling cozy and inviting. The page should feel premium yet approachable, with a vintage color palette featuring sage, olive green, warm browns, and muted warm accent colors.

---

## User Personas

1. **Coffee Enthusiasts** - People seeking quality artisanal coffee and unique café experiences
2. **Food Lovers** - Customers looking for fresh, homemade pastries and quality meals
3. **Community Members** - Locals seeking a cozy gathering spot
4. **Tourists/Visitors** - People discovering the café through online presence

---

## Architecture & Tech Stack

**Frontend:**
- React 19
- React Router DOM
- Shadcn UI components
- Custom CSS with vintage color palette
- Google Fonts (Playfair Display, Inter)
- Sonner for toast notifications

**Design System:**
- Vintage Color Palette: Sage (#8B9B7E), Olive (#6B7D5B), Warm Browns (#8B6F47, #A0826D)
- Typography: Playfair Display (headings), Inter (body)
- Animations: CSS keyframes, scroll-based reveals, parallax effects
- Responsive: Mobile-first approach

---

## Core Features Implemented ✅

### 1. Navigation (December 2024)
- Sticky navigation with scroll effect
- Smooth scroll to sections
- Mobile responsive hamburger menu
- "Reserve a Table" CTA button

### 2. Hero Section (December 2024)
- Full-screen hero with parallax background
- Animated headline and subheadline
- Dual CTA buttons (Explore Menu, Our Story)
- Scroll indicator with bounce animation
- Coffee steam animation effects

### 3. About Section (December 2024)
- Brand story with animated timeline
- Four milestone markers (2015, 2017, 2019, 2023)
- Three value cards with icons (Quality First, Community Focused, Made with Love)
- Intersection Observer for scroll animations

### 4. Why Famous Section (December 2024)
- Animated counter statistics
- Four key metrics: 50K+ customers, 15+ awards, 100% organic, 8 years experience
- Cards with hover effects
- Custom SVG icons

### 5. Menu Section (December 2024)
- Category filtering (All, Coffee, Tea, Pastries, Breakfast, Lunch)
- 12 menu items with realistic content
- Featured item badges
- Image hover overlays with "View Details" button
- Responsive grid layout

### 6. Specialties Section (December 2024)
- Carousel slider with 3 signature items
- Navigation arrows and dot indicators
- Smooth slide transitions
- Badge highlighting (Most Popular, Chef's Choice, Coffee Lovers)

### 7. Gallery Section (December 2024)
- 8-image responsive grid
- Image hover effects with captions
- Lightbox modal for full-size viewing
- Cinematic transitions

### 8. Location Section (December 2024)
- Interactive OpenStreetMap embed
- Contact information cards (Address, Phone, Email)
- Hours of operation display
- Hover effects on info cards

### 9. Contact/Reservation Section (December 2024)
- Full reservation form (name, email, phone, date, time, guests, message)
- Form validation
- Toast notifications on submission (mocked)
- Loading state with spinner
- Complementary coffee beans image

### 10. Footer (December 2024)
- Four-column layout: Brand, Quick Links, Social Media, Newsletter
- Animated floating coffee beans background
- Newsletter signup form
- Social media icons with hover effects
- Copyright and legal links

---

## Mock Data Structure

**Location:** `/app/frontend/src/data/mock.js`

Contains:
- Café branding (name, tagline, description)
- Hero section content
- About section (story, timeline, values)
- Statistics for "Why Famous"
- Menu items (12 items across 6 categories)
- Specialty items (3 signature dishes)
- Gallery images (8 photos)
- Location details and hours
- Social media links

---

## Key Design Patterns

1. **Scroll Animations**: Intersection Observer triggers fade-in-up animations
2. **Parallax Effect**: Hero background moves slower than scroll
3. **Smooth Scrolling**: Native CSS smooth scroll behavior
4. **Microinteractions**: Hover states on all interactive elements
5. **Counter Animation**: Animated numbers in statistics section
6. **Carousel Pattern**: Specialty items with prev/next navigation
7. **Lightbox Pattern**: Gallery modal for image viewing
8. **Form Validation**: HTML5 validation with custom styling

---

## What's Next

### Phase 2: Backend Development (P0)
- Set up FastAPI endpoints for reservations
- MongoDB models for reservations and newsletter signups
- Email notification system for new reservations
- Admin dashboard for managing reservations

### Phase 3: Enhanced Features (P1)
- Real-time table availability checker
- Online ordering/menu cart functionality
- Customer reviews and testimonials section
- Blog/news section for café updates
- Event calendar for live music nights and workshops

### Phase 4: Integrations (P2)
- Google Maps API for interactive map
- SendGrid for email notifications
- Payment gateway for online orders
- Social media feed integration
- Analytics tracking (Google Analytics)

---

## Priority Backlog

**P0 - Critical:**
- Backend API for reservation form
- Database integration for storing reservations
- Email notification system

**P1 - High Priority:**
- Admin authentication and dashboard
- Table management system
- Customer reviews section
- SEO optimization

**P2 - Nice to Have:**
- Online ordering system
- Blog/content management
- Social media integration
- Advanced analytics

---

## Current Status

✅ **Frontend MVP Complete** - All sections designed and animated with mock data
🔄 **Next:** Backend development for reservation system

---

## Updates Log

### December 2024 - Hero Section Redesign
**Changed:** Redesigned hero section for enhanced elegance and premium feel

**New Features:**
- "Est. 2015" badge with coffee icon and glass-morphism effect
- Refined typography with gradient text effect on brand name
- Elegant horizontal divider with gradient
- Italic tagline in Playfair Display font
- Squared button design (removed rounded corners)
- Shimmer effect on primary button hover
- Darker, more sophisticated overlay gradient
- Animated scroll indicator with moving line
- Sequential fade-in animations for all elements
- Improved mobile responsive sizing

**Visual Impact:**
- More premium, high-end aesthetic
- Better text readability with darker overlay
- Cleaner, more modern design language
- Enhanced focus on brand name and tagline
