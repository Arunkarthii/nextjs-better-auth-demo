# Next.js Better Auth Demo

A full authentication demo built with **Next.js App Router**, **Better Auth**, **Neon PostgreSQL**, **Drizzle ORM**, and **shadcn/ui**.  
This project demonstrates a modern, production-ready authentication flow including signup, login, protected routes, and logout.

---

## 🚀 Live Demo

🔗 **Vercel Deployment**  
https://better-auth-demo-nextjs.vercel.app

📦 **GitHub Repository**  
https://github.com/Arunkarthii/nextjs-better-auth-demo

---

## ✨ Features

- Email & Password Authentication (Better Auth)
- Signup & Login pages
- Secure session handling
- Protected dashboard route
- Logout with loading state & error handling
- Neon PostgreSQL database
- Drizzle ORM adapter
- shadcn/ui components
- Environment-based configuration (local & production)
- Deployed on Vercel

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Authentication:** Better Auth
- **Database:** Neon (PostgreSQL)
- **ORM:** Drizzle ORM
- **UI:** shadcn/ui + Tailwind CSS
- **Deployment:** Vercel

---

## 📁 Project Structure

app/
├─ api/auth/[...all]/route.ts
├─ dashboard/
├─ login/
├─ signup/
├─ page.tsx
└─ layout.tsx

components/
├─ ui/
└─ logout.tsx

db/
├─ drizzle.ts
└─ schema.ts

lib/
├─ auth.ts
├─ auth-client.ts
└─ utils.ts

server/
└─ user.ts


---

## 🔐 Environment Variables

### Local Development (`.env.local`)
```env
DATABASE_URL=your_neon_database_url
BETTER_AUTH_SECRET=your_32_character_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

Production (Vercel)
DATABASE_URL=your_neon_database_url
BETTER_AUTH_SECRET=your_32_character_secret
NEXT_PUBLIC_APP_URL=https://better-auth-demo-nextjs.vercel.app

🧪 Run Locally
npm install
npm run dev

Open: http://localhost:3000

📌 Notes

No secrets are hardcoded

Authentication URLs are environment-based

Built with scalability and production readiness in mind

Clean separation of UI, auth logic, and database layer

👤 Author

Arun Karthikeyan
Frontend Engineer | React | Next.js | TypeScript
