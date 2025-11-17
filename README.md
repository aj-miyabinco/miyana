# Miyana™ Golden Ratio E-commerce

Golden-Ratio-based, Razorpay-ready e-commerce starter for the Miyana™ premium perfume brand. Built with Next.js + TypeScript.

## Features
- Golden Ratio spacing, typography, and component geometry
- Multi-generational UX (Bloomers → Gen-Alpha) with accessibility toggles
- Razorpay API stubs (`/api/razorpay`, `/api/razorpay/verify`)
- Authenticated checkout with NextAuth (credentials + Google/GitHub/Facebook providers)
- Admin gate via `NEXT_PUBLIC_ADMIN_PASSWORD`
- Policy pages required by Razorpay (Privacy, Terms, Shipping, Cancellation/Refunds)
- LocalStorage cart + wishlist
- Scent discovery quiz, UGC, influencer gallery, campaign banners

## Setup
1. `rm -rf node_modules package-lock.json && npm install` (ensures the MongoDB driver installs at the pinned 4.x version required by the NextAuth adapter)
2. Copy `.env.example` to `.env.local` and fill Razorpay + admin values.
3. Point `MONGODB_URI` to your MongoDB instance (local or Atlas). Optional: set `MONGODB_DB` (defaults to `miyana`).
4. Add authentication secrets: `NEXTAUTH_SECRET`, optional OAuth client IDs/secrets, and the fallback `CREDENTIAL_USERNAME` / `CREDENTIAL_PASSWORD`.
5. `npm run dev`

`npm install` only installs JavaScript dependencies; it does **not** install MongoDB itself. Use your OS package manager or Atlas for Mongo. If installation fails in offline environments, you can still review the source; runtime requires npm registry access. If you previously installed `mongodb@6.x`, clear `node_modules`/`package-lock.json` and reinstall so the pinned `mongodb@4.17.2` satisfies the `@next-auth/mongodb-adapter` peer dependency.

## Deployment
- Optimized for Vercel (default Next.js build). Works on AWS/other hosts.
- Add CDN for `/public/images` when assets are added.

## Razorpay Notes
- Use `/api/razorpay` to create orders with `RAZORPAY_KEY_ID`/`RAZORPAY_KEY_SECRET`.
- `/api/razorpay/verify` validates signatures using HMAC-SHA256.
- Frontend placeholder calls should open Razorpay Checkout with brand colors and Made in India tagline.

## Data, MongoDB & Auth
- `/api/products` reads from MongoDB when `MONGODB_URI` is configured; if the collection is empty it auto-seeds from `data/products.ts`.
- Without `MONGODB_URI`, the API gracefully serves in-memory seed data so pages still render during design/development.
- Authentication uses NextAuth with the MongoDB adapter (MongoDB driver pinned to 4.x for compatibility). Supported providers: credentials fallback, Google, GitHub, Facebook. Add provider credentials to `.env.local` to enable.

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
