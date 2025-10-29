

A fully responsive, SEO-optimized e-commerce product listing page built with Next.js 16, featuring Server-Side Rendering (SSR) and integration with the Fake Store API.

##  Features

- **Server-Side Rendering (SSR)** - Built with Next.js 16 App Router for optimal performance and SEO
- **Responsive Design** - Fully responsive for mobile, tablet, and desktop with mobile-first approach
- **SEO Optimized** - Comprehensive SEO implementation including:
  - Meta tags (title, description, keywords)
  - Semantic HTML with proper H1/H2 tags
  - JSON-LD Schema markup for rich snippets
  - SEO-friendly image names and alt text
  - Proper heading hierarchy
- **Real API Integration** - Fetches products from Fake Store API with caching
- **Modern UI/UX** - Clean, professional design matching the provided mockup exactly
- **Vanilla CSS** - No Bootstrap or Tailwind CSS (pure CSS Modules as per requirements)
- **Accessibility** - WCAG compliant with proper ARIA labels, semantic HTML, and keyboard navigation
- **Performance** - Optimized images with lazy loading, efficient rendering, and minimal DOM size
- **Best Practices** - Clean code structure, proper naming conventions, comprehensive comments

## Technical Requirements Met

✅ HTML & CSS implementation without Bootstrap/Tailwind
✅ React.js with Next.js 16 framework
✅ Server-Side Rendering (SSR) for SEO
✅ Responsive for mobile, tablet & desktop
✅ Clean code structure with proper naming conventions
✅ Minimal pre-built packages (only Next.js essentials)
✅ SEO settings (title, description, H1/H2, schema, alt text)
✅ Integration with Fake Store API
✅ Deployed on  vercel
✅ Public GitHub repository

##  Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Vanilla CSS)
- **API**: Fake Store API (https://fakestoreapi.com)
- **Image Optimization**: Next.js Image component
- **Deployment**: Netlify

##  Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/Appscrip-task-yourname.git
cd Appscrip-task-yourname
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Step 3: Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Step 4: Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

##  Project Structure

```
├── 📁 actions
│   └── 📄 getProducts.ts
├── 📁 app
│   ├── 📁 components
│   │   ├── 📁 ProductListingPage
│   │   │   ├── 📄 Product-listing-page.tsx
│   │   │   └── 🎨 productlistingpage.module.css
│   │   ├── 📁 filter-sidebar
│   │   │   ├── 🎨 filter-sidebar.module.css
│   │   │   └── 📄 filter-sidebar.tsx
│   │   ├── 📁 footer
│   │   │   ├── 🎨 footer.module.css
│   │   │   └── 📄 footer.tsx
│   │   ├── 📁 header
│   │   │   ├── 🎨 header.module.css
│   │   │   └── 📄 header.tsx
│   │   ├── 📁 product-card
│   │   │   ├── 🎨 product-card.module.css
│   │   │   └── 📄 product-card.tsx
│   │   └── 📁 product-grid
│   │       ├── 🎨 product-grid.module.css
│   │       └── 📄 product-grid.tsx
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   ├── 🎨 page.module.css
│   └── 📄 page.tsx
├── 📁 public
│   ├── 🖼️ Logo.png
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ biome.json
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ tsconfig.json
```

---

##  Features Implemented

### Header Component
- Sticky positioning with shadow
- Responsive navigation menu with smooth animations
- Mobile hamburger menu with dropdown
- Search, wishlist, cart, and user account icons
- Language selector dropdown
- Top announcement bar (dark background)
- Hover effects and transitions

### Product Listing Page
- Server-side data fetching from Fake Store API
- Responsive product grid (3 cols desktop, 2 cols tablet, 1-2 cols mobile)
- Wishlist functionality with state management
- Sort options:
  - Recommended (default)
  - Newest First
  - Popular (by rating count)
  - Price: High to Low
  - Price: Low to High
- Product count display
- Show/Hide filter toggle for mobile

### Filter Sidebar
- Collapsible filter sections with smooth animations
- Filter categories:
  - Customizable (checkbox)
  - Ideal For (Men, Women, Baby & Kids)
  - Occasion
  - Work
  - Fabric
  - Segment
  - Suitable For
  - Raw Materials
  - Pattern
- Responsive behavior (collapses on mobile)
- Smooth expand/collapse animations

### Product Card
- Product image with lazy loading
- Wishlist toggle button with heart icon
- Product title (truncated to 2 lines)
- Sign in prompt for pricing
- Hover effects (lift and image zoom)
- SEO-friendly alt text

### Footer Component
- Newsletter subscription form
- Contact information (phone and email)
- Currency selector
- Company links (About, Stories, Artisans, etc.)
- Quick links (Orders, Shipping, FAQs, etc.)
- Social media links (Instagram, LinkedIn)
- Payment method icons
- Copyright notice

##  SEO Implementation Details

### Meta Tags
- **Title**: Descriptive and keyword-rich (60 characters)
- **Description**: Compelling description for search results (160 characters)
- **Keywords**: Relevant keywords for the product category


### Semantic HTML
- Proper use of `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`
- Correct heading hierarchy (H1 for main title, H2 for sections)
- Semantic form elements with proper labels

### JSON-LD Schema
- CollectionPage schema for the product listing
- ItemList schema with product items
- Product schema with name, image, description, and price
- Helps search engines understand page structure

### Image Optimization
- SEO-friendly image names (lowercase, hyphens)
- Descriptive alt text for all images
- Next.js Image component for automatic optimization
- Lazy loading for performance

##  Responsive Design Breakpoints

The application uses a mobile-first approach with the following breakpoints:

- **Mobile**: Below 480px (single column grid)
- **Mobile+**: 480px - 768px (2 column grid)
- **Tablet**: 768px - 1024px (2 column grid, adjusted spacing)
- **Desktop**: 1024px and above (3 column grid)

All components adapt smoothly to different screen sizes with optimized spacing and typography.

##  Code Structure & Best Practices

### Component Organization
- Each component has its own folder with `.tsx` and `.module.css` files
- Clear separation of concerns (logic, styling, markup)
- Reusable components (FilterSection, ProductCard)
- Props interfaces for type safety

### CSS Modules
- Scoped styling to prevent conflicts
- CSS variables for consistent theming
- Mobile-first media queries
- Smooth transitions and animations
- Accessibility-focused focus states

### TypeScript
- Strict type checking enabled
- Interface definitions for all props
- Type-safe API responses

### Comments & Documentation
- Comprehensive comments in all files
- Clear explanations of complex logic
- Section headers for easy navigation
- Inline comments for non-obvious code




## 🔧 Development Tips

### Adding New Products
Products are fetched from Fake Store API. To use real data:
1. Replace the API endpoint in `app/page.tsx`
2. Update the Product interface if needed
3. Adjust product card display accordingly

### Customizing Filters
To add new filter categories:
1. Add new filter state in `product-listing-page.tsx`
2. Create new FilterSection in `filter-sidebar.tsx`
3. Add corresponding styling in CSS modules

### Modifying Styles

- Component styles: `components/[component]/[component].module.css`
- CSS variables for theming in `globals.css`



### API Not Loading
- Check internet connection
- Verify Fake Store API is accessible: https://fakestoreapi.com/products
- Check browser console for errors
