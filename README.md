https://www.figma.com/design/dqw7PSvbH5A8GF5DT5EQ0N/VU-Platform?node-id=65-2&t=36KUfy3ZOJfUx0E0-1

# Project Structure

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                         # Home (/)
│   ├── loading.tsx
│   ├── not-found.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── pricing/
│   │   ├── page.tsx
│   │   ├── confirm/
│   │   │   └── page.tsx
│   │   └── payment/
│   │       └── page.tsx
│   │
│   ├── cases/
│   │   └── page.tsx
│   │
│   └── auth/
│       ├── login/
│       │   └── page.tsx
│       │
│       ├── signup/
│       │   ├── page.tsx
│       │   ├── company/
│       │   │   └── page.tsx
│       │   └── complete/
│       │       └── page.tsx
│       │
│       ├── forgot-password/
│       │   └── page.tsx
│       │
│       ├── verify-email/
│       │   └── page.tsx
│       │
│       └── reset-password/
│           └── page.tsx
│
├── features/
│   │
│   ├── home/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── constants/
│   │   └── HomePage.tsx
│   │
│   ├── about/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── AboutPage.tsx
│   │
│   ├── pricing/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── validation/
│   │   ├── types/
│   │   ├── constants/
│   │   ├── PricingPage.tsx
│   │   ├── ConfirmUpgradePage.tsx
│   │   └── PaymentPage.tsx
│   │
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── validation/
│   │   ├── types/
│   │   ├── constants/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── verify-email/
│   │   └── reset-password/
│   │
│   └── cases/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       ├── constants/
│       └── CasesPage.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   ├── shared/
│   │   ├── Loader.tsx
│   │   ├── ErrorState.tsx
│   │   └── EmptyState.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       ├── select.tsx
│       ├── checkbox.tsx
│       ├── textarea.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       └── ...
│
├── lib/
│   ├── axios.ts
│   ├── query-client.ts
│   ├── stripe.ts
│   └── utils.ts
│
├── hooks/
│   ├── useDebounce.ts
│   ├── useMediaQuery.ts
│   └── useLocalStorage.ts
│
├── services/
│   ├── api.ts
│   └── endpoints.ts
│
├── constants/
│   ├── routes.ts
│   ├── plans.ts
│   └── index.ts
│
├── types/
│   ├── api.ts
│   ├── auth.ts
│   ├── common.ts
│   └── pricing.ts
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
└── middleware.ts
```

## Architecture

The project follows a **Feature-Based Architecture**.

- **app/** → Application routes (Next.js App Router).
- **features/** → Business features (Home, Auth, Pricing, Cases).
- **components/** → Shared reusable components.
- **lib/** → Utilities and application configuration.
- **services/** → Shared API layer.
- **hooks/** → Global custom hooks.
- **types/** → Shared TypeScript types.
- **constants/** → Shared constants and routes.
- **assets/** → Images, icons, and fonts.

This structure keeps the application scalable, maintainable, and easy to extend as new features are added.
