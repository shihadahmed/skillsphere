# 🎓 SkillSphere - Modern E-Learning & Course Platform

**SkillSphere** is a high-performance, full-stack e-learning platform built with **Next.js 16**, **React 19**, **MongoDB**, and **HeroUI**. It offers a seamless user experience with modern UI components, secure authentication, dynamic course listings, and interactive course overview pages.

🔗 **Live Demo:** [https://skillsphere-b13a8.vercel.app](https://skillsphere-b13a8.vercel.app)

---

## ✨ Key Features

- 🌐 **Live Deployment:** Hosted and live on Vercel.
- 🔐 **Authentication System:** Secure authentication powered by **Better Auth** with **MongoDB Adapter**.
- 📚 **Interactive Course Grid:** Filter courses by categories dynamically with live counts.
- 📖 **Course Details Page:** View complete course specifications, instructor details, duration, rating, curriculum, and how-to-start guides.
- 🎨 **Modern UI Components:** Styled with **HeroUI** and **Tailwind CSS v4** for clean and sleek visuals.
- 🎠 **Hero & Testimonial Sliders:** Smooth sliding components using **Swiper JS**.
- 👤 **User Profile Page:** Dedicated profile dashboard for authenticated users.
- 🔔 **Toast Notifications:** Real-time user feedback with **React Toastify**.
- 📱 **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack & Dependencies

### **Core Technologies**
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Database:** [MongoDB](https://www.mongodb.com/) (`mongodb` & `@better-auth/mongo-adapter`)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **Deployment:** [Vercel](https://vercel.com/)

### **UI & Styling**
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [HeroUI](https://heroui.com/) (`@heroui/react`, `@heroui/styles`)
- **Slider/Carousel:** [Swiper JS](https://swiperjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Alerts/Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📁 Project Structure

```text
SKILLSPHERE/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── page.jsx
│   │   │   └── signup/
│   │   │       └── page.jsx
│   │   ├── components/
│   │   │   ├── Home/
│   │   │   │   ├── CourseGrid.jsx
│   │   │   │   ├── HeroSlider.jsx
│   │   │   │   ├── JoinTeam.jsx
│   │   │   │   ├── MobileHero.jsx
│   │   │   │   ├── Newsletter.jsx
│   │   │   │   ├── SkillDevelopment.jsx
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   └── WhyChooseUs.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── course-details/
│   │   │   └── page.jsx
│   │   ├── courses/
│   │   │   └── page.js
│   │   ├── my-profile/
│   │   │   └── page.jsx
│   │   ├── privacy-policy/
│   │   │   └── page.jsx
│   │   ├── terms/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── data/
│   │   ├── courses.json
│   │   └── testimonials.json
│   └── lib/
│       ├── auth-client.js
│       └── auth.js
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md