# Project memory

## Product intent & audience

- RENVO: pre-owned electronics marketplace where users buy and sell used gadgets.
- Audience: everyday consumers buying/selling second-hand electronics; sustainability-minded.
- Scope: front-end only initially — no backend, authentication, or payment yet.

## Brand personality & voice

- Premium, professional technology startup tone.
- Sustainability and trust messaging (e.g. "Give Your Gadgets a Second Life", "Choose sustainable technology").
- Friendly but credible; clear marketplace language (buyer, seller, listings, deals).

## Visual design & UX direction

- White background; dark navy headings; electric blue primary buttons.
- Modern typography; clean cards and navigation; professional marketplace aesthetic.
- Responsive desktop + mobile; sticky nav with hamburger menu on mobile.
- Homepage sections: nav, hero (with live stats + floating product cards), 8 category cards (Smartphones, Laptops, Tablets, Smartwatches, Headphones, Cameras, Gaming Consoles, Accessories), featured listings (8 sample products with price/condition/seller), How It Works (4 steps), Why Choose RENVO (4 features), About, footer.
- Inline SVG illustrations used for category/product imagery (real product photos to be swapped in later).
- Non-functional links/buttons trigger on-screen "coming soon" message or modal rather than dead ends.

## Decisions, constraints & rationale

- Tech stack strictly HTML5 + CSS3 + Vanilla JavaScript only — no React, TypeScript, Next.js, Vue, Angular, or Tailwind.
- User is a beginner: code must be simple, readable, and commented.
- A Vite build tool/starter was present and cleaned up; build verification is expected to pass.
- Images: Pexels/image search was unavailable, so clean inline SVG icons are used as placeholders.
- "Coming soon" modal pattern chosen because backend features (login, signup, contact, privacy, terms) are not yet implemented.

## Open questions & assumptions

- Assumed later phases will add backend, auth, payments, real product photos, and full pages (Explore, How It Works, About, Login, Signup, Contact, Privacy, Terms).
- Unknown: final brand color hex values, logo asset, product photo source, and whether categories/listings will come from a future API.
- Unknown: whether the Vite dev tooling should remain or be removed for a truly framework-free setup.