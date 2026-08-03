https://www.figma.com/design/dqw7PSvbH5A8GF5DT5EQ0N/VU-Platform?node-id=65-2&t=36KUfy3ZOJfUx0E0-1
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                         // Home (/)
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
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PricingPreview.tsx
│   │   │   ├── CasesPreview.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── FAQSection.tsx
│   │   │
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
│   │   │   ├── PricingCard.tsx
│   │   │   ├── PlanCard.tsx
│   │   │   ├── FeatureList.tsx
│   │   │   ├── BillingToggle.tsx
│   │   │   ├── ConfirmCard.tsx
│   │   │   └── PaymentSummary.tsx
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── validation/
│   │   ├── constants/
│   │   ├── PricingPage.tsx
│   │   ├── ConfirmUpgradePage.tsx
│   │   └── PaymentPage.tsx
│   │
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   ├── CompanyForm.tsx
│   │   │   ├── ForgotPasswordForm.tsx
│   │   │   ├── ResetPasswordForm.tsx
│   │   │   ├── VerifyEmailCard.tsx
│   │   │   └── OTPInput.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useLogin.ts
│   │   │   ├── useSignup.ts
│   │   │   └── useResetPassword.ts
│   │   │
│   │   ├── services/
│   │   │   └── auth.api.ts
│   │   │
│   │   ├── validation/
│   │   │   ├── login.schema.ts
│   │   │   ├── signup.schema.ts
│   │   │   └── reset-password.schema.ts
│   │   │
│   │   ├── types/
│   │   ├── constants/
│   │   │
│   │   ├── login/
│   │   │   └── LoginPage.tsx
│   │   │
│   │   ├── signup/
│   │   │   ├── SignupPage.tsx
│   │   │   ├── CompanyPage.tsx
│   │   │   └── CompletePage.tsx
│   │   │
│   │   ├── forgot-password/
│   │   │   └── ForgotPasswordPage.tsx
│   │   │
│   │   ├── verify-email/
│   │   │   └── VerifyEmailPage.tsx
│   │   │
│   │   └── reset-password/
│   │       └── ResetPasswordPage.tsx
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
│   │   ├── Logo.tsx
│   │   ├── Loader.tsx
│   │   ├── EmptyState.tsx
│   │   └── ErrorState.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── sheet.tsx
│       ├── navigation-menu.tsx
│       ├── form.tsx
│       ├── textarea.tsx
│       ├── checkbox.tsx
│       ├── radio-group.tsx
│       ├── select.tsx
│       ├── badge.tsx
│       ├── avatar.tsx
│       ├── card.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       └── ...
│
├── lib/
│   ├── axios.ts
│   ├── query-client.ts
│   ├── stripe.ts
│   ├── utils.ts
│   └── validators.ts
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
│   ├── auth.ts
│   ├── pricing.ts
│   ├── common.ts
│   └── api.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
