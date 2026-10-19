# Virtual Interview Platform

A modern web application that enables candidates and hiring teams to conduct simulated interviews, share interview recordings, and get actionable feedback. Built with **Next.js 14**, **TypeScript**, and a feature‑based architecture, the platform is scalable, maintainable, and ready for production.

---

##  Features
- **Interview Scheduler** – Create, edit, and manage interview slots.
- **Live Video & Audio** – Real‑time communication powered by WebRTC (future integration).
- **Recording & Playback** – Store interview sessions and replay them later.
- **Feedback System** – Interviewers can leave structured feedback and ratings.
- **Responsive UI** – Mobile‑first design with reusable components.
- **Stripe Integration** – Secure payment handling for premium plans.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router) 
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + TanStack Query
- **API**: Axios + custom service layer
- **Authentication**: NextAuth (email/password & OAuth)
---

## 🚀 Getting Started
### Prerequisites
- Node.js **>= 18**
- npm **>= 9** (or Yarn/PNPM)
- A Stripe account for payment testing (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/virtual-interview-platform.git
cd virtual-interview-platform

# Install dependencies
npm install
```

### Development
```bash
# Run the dev server
npm run dev
```
Open <http://localhost:3000> in your browser.

### Build for Production
```bash
npm run build   # Compile the app
npm start       # Start the production server
```

---

## 📂 Project Structure
```
src/
├─ app/               # Next.js App Router – layout, pages, and route groups
│   ├─ layout.tsx    # Global layout (fonts, providers)
│   ├─ loading.tsx   # Global loading UI
│   ├─ not-found.tsx # 404 page
│   ├─ (main)/       # Public pages (home, about, pricing, cases)
│   └─ (auth)/       # Authentication routes (login, signup, etc.)
│
├─ features/          # Feature‑based modules (home, auth, pricing, cases)
│   ├─ home/          # Home page components, hooks, services
│   ├─ auth/          # Auth flow components
│   └─ pricing/       # Pricing, confirmation, payment pages
│
├─ components/        # Shared UI components (Navbar, Footer, UI kit)
├─ lib/               # Utilities (axios instance, Stripe helpers)
├─ services/          # API layer (endpoints, request wrappers)
├─ hooks/             # Global custom React hooks
├─ constants/         # Route definitions, static data
├─ types/             # TypeScript type definitions
└─ assets/            # Images, icons, fonts
```

## Routing

### Public Pages

| Route              | Description                        |
| :----------------- | :--------------------------------- |
| `/`                | Home page                          |
| `/about`           | About the platform                 |
| `/cases`           | Case studies and success stories   |
| `/pricing`         | Pricing plans                      |
| `/pricing/confirm` | Confirm selected subscription plan |
| `/pricing/payment` | Complete payment using Stripe      |

### Authentication

| Route                   | Description                                   |
| :---------------------- | :-------------------------------------------- |
| `/auth/login`           | User login                                    |
| `/auth/signup`          | Create a new account                          |
| `/auth/signup/company`  | Enter company information during registration |
| `/auth/signup/complete` | Registration completed successfully           |
| `/auth/forgot-password` | Request a password reset                      |
| `/auth/verify-email`    | Verify email address                          |
| `/auth/reset-password`  | Set a new password                            |

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

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b my-feature`).
3. Commit your changes with clear messages.
4. Open a Pull Request describing the changes.

Please follow the existing code style and run tests before submitting.

---

## 📄 License
This project is licensed under the **MIT License**.

https://www.figma.com/design/dqw7PSvbH5A8GF5DT5EQ0N/VU-Platform?node-id=65-2&t=36KUfy3ZOJfUx0E0-1


