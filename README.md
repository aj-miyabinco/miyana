# Miyana™ Golden Ratio E-commerce

Golden-Ratio-based, Razorpay-ready e-commerce starter for the Miyana™ premium perfume brand. Built with Next.js + TypeScript.

## Features
- Golden Ratio spacing, typography, and component geometry
- Multi-generational UX (Bloomers → Gen-Alpha) with accessibility toggles
- Razorpay API stubs (`/api/razorpay`, `/api/razorpay/verify`)
- Admin gate via `NEXT_PUBLIC_ADMIN_PASSWORD`
- Policy pages required by Razorpay (Privacy, Terms, Shipping, Cancellation/Refunds)
- LocalStorage cart + wishlist
- Scent discovery quiz, UGC, influencer gallery, campaign banners

## Setup
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill Razorpay + admin values.
3. `npm run dev`

If installation fails in offline environments, you can still review the source; runtime requires npm registry access.

## Deployment
- Optimized for Vercel (default Next.js build). Works on AWS/other hosts.
- Add CDN for `/public/images` when assets are added.

## Razorpay Notes
- Use `/api/razorpay` to create orders with `RAZORPAY_KEY_ID`/`RAZORPAY_KEY_SECRET`.
- `/api/razorpay/verify` validates signatures using HMAC-SHA256.
- Frontend placeholder calls should open Razorpay Checkout with brand colors and Made in India tagline.

## Design Tokens
- Spacing: 4 → 6 → 10 → 16 → 26 → 42 → 68 → 110 (phi-driven)
- Colors: off-white base, blush rose, soft gold, deep charcoal, sand neutrals
- Typography: Playfair Display (headings), Inter (body) with golden-scale hierarchy
- Components: phi aspect cards, hero golden spiral annotations, phi-radius buttons

## Image Cropping Guidance
- Crop hero/product imagery to 1:1.618 rectangles.
- Place perfume focal points on golden-spiral intersections (roughly 0.618 from edges).
- Maintain phi spacing between subject and edges in both light and dark modes.

## Compliance Placeholders
- DPDP Act 2023, GST invoice logic, Legal Metrology notes
- Cookie banner + preference center to be wired to consent tool
- Age-appropriate marketing messaging

## Testing
- `npm run lint` (requires dependencies)
