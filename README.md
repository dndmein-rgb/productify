# 🛍️ Mercato

<div align="center">

![Mercato Banner](https://img.shields.io/badge/Mercato-Creator%20Marketplace-6366f1?style=for-the-badge)

**A modern, full-stack creator marketplace where creativity meets commerce**

[Live Demo](https://mercato-il6a.onrender.com/) · [Report Bug](https://github.com/dndmein-rgb/Mercato/issues) · [Request Feature](https://github.com/dndmein-rgb/Mercato/issues)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

Mercato is a professional marketplace platform designed specifically for creators to showcase, manage, and sell their products. Built with modern web technologies, it combines stunning visual design with powerful functionality to create an engaging experience for both creators and buyers.

### Why Mercato?

- **Creator-First Design**: Built from the ground up with creators in mind
- **Beautiful Interface**: Modern, animated UI that delights users
- **Fully Responsive**: Perfect experience on desktop, tablet, and mobile
- **Easy to Customize**: 30+ themes and extensive customization options
- **Production Ready**: Secure authentication, optimized performance, and scalable architecture

---

## ✨ Features

### 🎨 User Experience

- **Smooth Animations**: Fade-in, slide, scale, and float animations throughout
- **Interactive Cards**: Hover effects with elevation and transform animations
- **Gradient Effects**: Modern gradient backgrounds, text, and overlays
- **Theme Switcher**: Choose from 30+ beautiful DaisyUI themes
- **Responsive Design**: Seamless experience across all devices

### 🛒 Marketplace Features

- **Product Showcase**: Browse products with beautiful card layouts
- **Product Management**: Create, edit, and delete your products
- **Creator Profiles**: View products by specific creators
- **Comments System**: Engage with community through product discussions
- **Search & Filter**: Find products quickly (coming soon)
- **Featured Products**: Highlight top products on homepage

### 🔐 Security & Authentication

- **Clerk Integration**: Secure, modern authentication
- **Protected Routes**: Secure access to user-specific features
- **Session Management**: Persistent login across sessions
- **User Authorization**: Creator-only product management

### ⚡ Performance

- **Optimized Loading**: Lazy loading for images and components
- **Efficient Caching**: React Query for smart data caching
- **Fast Navigation**: Client-side routing with React Router
- **Database Optimization**: Efficient queries with Drizzle ORM

---

## 🛠 Tech Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 19 |
| Vite | Build Tool | 6 |
| TypeScript | Type Safety | 5 |
| Tailwind CSS | Styling | 4 |
| DaisyUI | Component Library | 4 |
| React Router | Routing | 7 |
| React Query | Data Fetching | 5 |
| Clerk | Authentication | Latest |
| Lucide React | Icons | Latest |

### Backend

| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime | 18+ |
| Express | Web Framework | 4 |
| TypeScript | Type Safety | 5 |
| Drizzle ORM | Database ORM | Latest |
| PostgreSQL | Database | 14+ |
| Clerk Express | Auth Middleware | Latest |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18 or higher
- npm or yarn package manager
- PostgreSQL database (local or cloud)
- Clerk account (free tier available)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/dndmein-rgb/Mercato.git
cd Mercato
```

2. **Install dependencies**

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Set up environment variables**

**Frontend** (`frontend/.env`):
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
VITE_API_URL=http://localhost:3000
```

**Backend** (`backend/.env`):
```env
DATABASE_URL=postgresql://username:password@localhost:5432/mercato
CLERK_SECRET_KEY=sk_test_your_clerk_secret_here
PORT=3000
NODE_ENV=development
```

4. **Set up the database**

```bash
cd backend
npm run db:push
```

5. **Start the development servers**

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

6. **Open your browser**

Navigate to `http://localhost:5173` to see Mercato in action!

---

## 📁 Project Structure

```
Mercato/
├── frontend/                  # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── CommentSection.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ThemeSelector.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── CreateProduct.jsx
│   │   │   ├── EditProduct.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── Profile.jsx
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useProducts.js
│   │   ├── lib/             # Utility functions
│   │   │   └── queryClient.js
│   │   ├── App.jsx          # Main app component
│   │   ├── index.css        # Global styles & animations
│   │   └── main.jsx         # App entry point
│   ├── public/              # Static assets
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                  # Express backend API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   │   ├── commentController.ts
│   │   │   └── productController.ts
│   │   ├── routes/          # API routes
│   │   │   ├── commentRoutes.ts
│   │   │   └── productRoutes.ts
│   │   ├── db/              # Database setup
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   ├── middleware/      # Custom middleware
│   │   ├── config/          # Configuration files
│   │   └── index.ts         # Server entry point
│   ├── drizzle.config.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── .npmrc
├── package.json
└── README.md
```

---

## 🔌 API Documentation

### Products

#### Get All Products
```http
GET /api/products
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Product Title",
    "description": "Product description",
    "price": 99.99,
    "imageUrl": "https://example.com/image.jpg",
    "userId": "user_123",
    "creatorName": "John Doe",
    "creatorImage": "https://example.com/avatar.jpg",
    "createdAt": "2024-01-01T00:00:00Z"
  }
]
```

#### Get Product by ID
```http
GET /api/products/:id
```

#### Create Product
```http
POST /api/products
Authorization: Bearer {clerk_token}
Content-Type: application/json

{
  "title": "New Product",
  "description": "Product description",
  "price": 99.99,
  "imageUrl": "https://example.com/image.jpg"
}
```

#### Update Product
```http
PUT /api/products/:id
Authorization: Bearer {clerk_token}
```

#### Delete Product
```http
DELETE /api/products/:id
Authorization: Bearer {clerk_token}
```

### Comments

#### Get Comments for Product
```http
GET /api/comments/:productId
```

#### Create Comment
```http
POST /api/comments
Authorization: Bearer {clerk_token}
Content-Type: application/json

{
  "productId": 1,
  "content": "Great product!"
}
```

#### Delete Comment
```http
DELETE /api/comments/:id
Authorization: Bearer {clerk_token}
```

---

## 🎨 Customization

### Themes

Mercato comes with 30+ pre-built themes powered by DaisyUI. Users can switch themes via the theme selector in the navbar. The selected theme is saved to localStorage.

**Available Themes:**
- Light, Dark, Cupcake, Bumblebee, Emerald, Corporate
- Synthwave, Retro, Cyberpunk, Valentine, Halloween
- Garden, Forest, Aqua, Lofi, Pastel, Fantasy
- Wireframe, Black, Luxury, Dracula, CMYK
- Autumn, Business, Acid, Lemonade, Night, Coffee
- Winter, Dim, Nord, Sunset

### Animations

All animations are defined in `frontend/src/index.css`:

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

**Available Animations:**
- `animate-fade-in-up` - Fade in with upward movement
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-scale-in` - Scale up animation
- `animate-glow` - Glowing pulse effect
- `animate-float` - Gentle floating motion

### Color Scheme

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      success: '#10b981',
    }
  }
}
```

---

## 🚢 Deployment

### Frontend (Vercel/Netlify)

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Deploy:**
- Vercel: `vercel deploy`
- Netlify: Drag and drop `dist` folder

3. **Environment Variables:**
Set `VITE_CLERK_PUBLISHABLE_KEY` and `VITE_API_URL` in your deployment platform

### Backend (Render/Railway/Heroku)

1. **Prepare for deployment:**
```bash
cd backend
npm run build
```

2. **Set environment variables:**
- `DATABASE_URL`
- `CLERK_SECRET_KEY`
- `PORT`
- `NODE_ENV=production`

3. **Deploy:**
- Render: Connect GitHub repo and deploy
- Railway: `railway up`
- Heroku: `git push heroku main`

### Database (Supabase/Neon/Railway)

1. Create a PostgreSQL database
2. Run migrations:
```bash
npm run db:push
```
3. Update `DATABASE_URL` in backend environment

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Keep PRs focused and small

---

## 📝 License

Distributed under the ISC License. See `LICENSE` file for more information.

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS
- [Clerk](https://clerk.com/) - Authentication and user management
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

---

## 📧 Contact

Project Link: [https://github.com/dndmein-rgb/Mercato](https://github.com/dndmein-rgb/Mercato)

Live Demo: [https://mercato-il6a.onrender.com/](https://mercato-il6a.onrender.com/)

---

<div align="center">

**Built with ❤️ for creators everywhere**

⭐ Star this repo if you find it helpful!

</div>
