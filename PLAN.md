# Snap-Multi-Services Next.js Implementation Plan

## Project Overview
Convert the static HTML file (`assets/UI.html`) into a fully functional Next.js 15 application with reusable React components, maintaining the existing design and functionality while adding a product catalog feature.

## Current State Analysis
- ✅ Next.js 15 project with App Router initialized
- ✅ TypeScript and Tailwind CSS v4 configured
- ✅ Static HTML reference (`assets/UI.html`) available
- ✅ Product data (`assets/products.json`) available
- ✅ Business documentation in PDF format available

## Implementation Phases

### Phase 1: Foundation Setup
**Objective**: Establish the core project structure and configuration

#### Task 1.1: Tailwind Configuration
- [ ] Extract custom Tailwind config from HTML into `tailwind.config.ts`
- [ ] Add custom colors (primary: #22c55e, secondary: #3b82f6, accent: #f59e0b)
- [ ] Add custom animations (float, pulse-slow, bounce-slow)
- [ ] Add custom CSS classes for gradient backgrounds and hero patterns

#### Task 1.2: Global Styles Setup
- [ ] Update `src/app/globals.css` with custom keyframes and utility classes
- [ ] Add gradient-bg and hero-pattern utility classes
- [ ] Ensure consistent font and base styling

#### Task 1.3: Component Structure Planning
- [ ] Create `src/components` directory structure
- [ ] Plan component hierarchy based on HTML sections
- [ ] Define component props interfaces

### Phase 2: Core Components Development
**Objective**: Create reusable components for each major section

#### Task 2.1: Layout Components
- [ ] Create `Header` component with navigation and contact info
- [ ] Create `Footer` component with company details and links
- [ ] Create `Layout` component or update `layout.tsx`

#### Task 2.2: Hero Section Component
- [ ] Create `HeroSection` component with gradient background
- [ ] Implement floating statistics with animations
- [ ] Add call-to-action buttons
- [ ] Include hero pattern background styling

#### Task 2.3: Services Section Component
- [ ] Create `ServicesSection` component
- [ ] Create individual `ServiceCard` components
- [ ] Implement hover animations and transitions
- [ ] Include all 4 services (Air Compressor, Generator, Equipment Repairs, Emergency)

#### Task 2.4: Equipment Categories Component
- [ ] Create `EquipmentSection` component
- [ ] Create `EquipmentCard` components for each category
- [ ] Implement grid layout with responsive design
- [ ] Include images and pricing information

#### Task 2.5: Features & Benefits Component
- [ ] Create `FeaturesSection` component
- [ ] Implement statistics display with icons
- [ ] Add overlay effects for the workshop image
- [ ] Create responsive two-column layout

#### Task 2.6: Call-to-Action Component
- [ ] Create `CTASection` component with gradient background
- [ ] Add contact cards for Paul and Jason
- [ ] Implement action buttons and email links

### Phase 3: Product Catalog Implementation
**Objective**: Create a comprehensive product catalog using the products.json data

#### Task 3.1: Product Data Management
- [ ] Create types/interfaces for product data structure
- [ ] Create utility functions for data processing and filtering
- [ ] Implement product search and category filtering logic

#### Task 3.2: Product Catalog Components
- [ ] Create `ProductCatalog` page component
- [ ] Create `ProductGrid` component for displaying products
- [ ] Create `ProductCard` component for individual products
- [ ] Create `ProductFilter` component for category filtering
- [ ] Create `ProductSearch` component for text-based search

#### Task 3.3: Product Categories Organization
- [ ] Group products by categories (Tyre Inflator, Hose Couplers, etc.)
- [ ] Implement category-based navigation
- [ ] Add product count per category
- [ ] Handle special pricing (POA, NLA)

### Phase 4: Navigation and Routing
**Objective**: Implement proper routing and navigation between sections

#### Task 4.1: Page Structure
- [ ] Update main page (`src/app/page.tsx`) to include all sections
- [ ] Create product catalog page (`src/app/products/page.tsx`)
- [ ] Implement smooth scrolling navigation for main page sections

#### Task 4.2: Navigation Enhancement
- [ ] Add active section highlighting in navigation
- [ ] Implement mobile menu functionality
- [ ] Add breadcrumb navigation for product pages
- [ ] Create "Back to top" functionality

### Phase 5: Interactivity and Animation
**Objective**: Add dynamic behavior and smooth animations

#### Task 5.1: Animation Implementation
- [ ] Implement scroll-triggered animations using CSS/Intersection Observer
- [ ] Add hover effects for cards and buttons
- [ ] Implement floating animations for hero elements
- [ ] Add loading states and transitions

#### Task 5.2: Interactive Features
- [ ] Add form handling for quote requests
- [ ] Implement click-to-call functionality for phone numbers
- [ ] Add email composition links
- [ ] Create modal/popup for service requests

### Phase 6: Content Management and SEO
**Objective**: Optimize for search engines and maintainability

#### Task 6.1: SEO Optimization
- [ ] Add proper meta tags and Open Graph data
- [ ] Implement structured data for business information
- [ ] Add alt text for all images
- [ ] Create sitemap and robots.txt

#### Task 6.2: Content Organization
- [ ] Extract text content into constants/config files
- [ ] Implement proper image optimization using Next.js Image component
- [ ] Add error boundaries and loading states
- [ ] Create 404 and error pages

### Phase 7: Responsive Design and Accessibility
**Objective**: Ensure the application works on all devices and is accessible

#### Task 7.1: Responsive Design
- [ ] Test and refine mobile layouts
- [ ] Ensure proper touch targets for mobile
- [ ] Optimize images for different screen sizes
- [ ] Test tablet and desktop layouts

#### Task 7.2: Accessibility
- [ ] Add proper ARIA labels and roles
- [ ] Ensure keyboard navigation works properly
- [ ] Test with screen readers
- [ ] Implement focus management
- [ ] Add skip navigation links

### Phase 8: Performance Optimization
**Objective**: Optimize for fast loading and smooth performance

#### Task 8.1: Performance Enhancements
- [ ] Implement lazy loading for images and sections
- [ ] Optimize bundle size and code splitting
- [ ] Add service worker for caching (if needed)
- [ ] Optimize font loading

#### Task 8.2: Quality Assurance
- [ ] Run Lighthouse audits
- [ ] Test across different browsers
- [ ] Validate HTML and accessibility
- [ ] Performance testing on various devices

### Phase 9: Testing and Deployment Preparation
**Objective**: Ensure code quality and prepare for deployment

#### Task 9.1: Code Quality
- [ ] Run ESLint and fix any issues
- [ ] Add TypeScript strict mode compliance
- [ ] Implement unit tests for utility functions
- [ ] Add integration tests for key components

#### Task 9.2: Deployment Preparation
- [ ] Configure build optimization
- [ ] Set up environment variables for production
- [ ] Test production build locally
- [ ] Prepare deployment documentation

## Technical Specifications

### Component Architecture
```
src/
├── app/
│   ├── layout.tsx (updated)
│   ├── page.tsx (main landing page)
│   ├── products/
│   │   └── page.tsx (product catalog)
│   └── globals.css (updated)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── EquipmentSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── CTASection.tsx
│   ├── products/
│   │   ├── ProductCatalog.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilter.tsx
│   │   └── ProductSearch.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
└── data/
    └── products.ts
```

### Key Design Principles
1. **Component Reusability**: Create modular, reusable components
2. **Type Safety**: Full TypeScript implementation
3. **Performance**: Optimized loading and rendering
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Responsive Design**: Mobile-first approach
6. **SEO Optimization**: Search engine friendly structure

### Color Scheme
- Primary: #22c55e (Green)
- Secondary: #3b82f6 (Blue)
- Accent: #f59e0b (Amber)
- Additional: Various grays and whites for text and backgrounds

### Animation Strategy
- CSS-based animations for performance
- Intersection Observer for scroll-triggered effects
- Hover animations for interactive elements
- Loading states for dynamic content

## Success Criteria
- [ ] All sections from original HTML are functional in React
- [ ] Product catalog is fully operational with search and filtering
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Performance scores above 90 on Lighthouse
- [ ] Accessibility compliance achieved
- [ ] TypeScript compilation with no errors
- [ ] ESLint passes with no warnings

## Estimated Timeline
- Phase 1: 1-2 days
- Phase 2: 3-4 days
- Phase 3: 2-3 days
- Phase 4: 1-2 days
- Phase 5: 2-3 days
- Phase 6: 1-2 days
- Phase 7: 2-3 days
- Phase 8: 1-2 days
- Phase 9: 1-2 days

**Total Estimated Time: 14-23 days**

## Notes
- Maintain existing business branding and visual identity
- Preserve all contact information and pricing details
- Keep the professional, trustworthy appearance
- Ensure the website reflects the company's expertise and reliability
- Test thoroughly before deployment to maintain business credibility