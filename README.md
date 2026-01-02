# Mercato - Professional Creator Marketplace

A sleek, modern marketplace platform built for creators to showcase and sell their products. Mercato combines beautiful design with powerful functionality to create an engaging user experience.

## ✨ Features

- **Professional Design**: Modern UI with smooth animations and gradient effects
- **Product Showcase**: Beautiful product cards with hover animations and interactive elements
- **Creator Profiles**: Manage and showcase your products with ease
- **Comments System**: Engage with the community through product comments
- **Authentication**: Secure user authentication with Clerk
- **Responsive Design**: Fully responsive across all devices
- **Theme Support**: 30+ beautiful themes to choose from
- **Real-time Updates**: Instant product and comment updates

## 🎨 Design Highlights

### Animations & Effects
- Smooth fade-in animations on page load
- Card hover effects with elevation and scale transforms
- Gradient overlays and blur effects
- Floating and pulsing animations
- Smooth transitions on all interactive elements

### Professional Styling
- Gradient backgrounds and text
- Consistent color scheme with primary, accent, and success colors
- Rounded corners and modern spacing
- Shadow effects for depth
- Smooth color transitions

## 🚀 Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first CSS
- **DaisyUI** - Component library
- **React Router** - Client-side routing
- **Clerk** - Authentication
- **React Query** - Data fetching
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database
- **Clerk Express** - Authentication middleware

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account for authentication

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run db:push
npm run dev
```

## 🎯 Project Structure

```
mercato/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── index.css       # Global styles with animations
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── routes/         # API routes
│   │   ├── db/             # Database setup
│   │   ├── config/         # Configuration
│   │   └── index.ts        # Server entry point
│   └── package.json
└── README.md
```

## 🎨 Customization

### Themes
Switch between 30+ beautiful themes in the theme selector. Themes are persisted in localStorage.

### Colors
Customize primary, secondary, accent, and neutral colors through Tailwind CSS configuration.

### Animations
All animations are defined in `frontend/src/index.css` and can be easily customized:
- `animate-fade-in-up` - Fade in with upward movement
- `animate-slide-in-left/right` - Slide in from sides
- `animate-scale-in` - Scale up animation
- `animate-glow` - Glowing effect
- `animate-float` - Floating animation

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/mercato
CLERK_SECRET_KEY=your_clerk_secret
PORT=3000
```

## 📱 Pages

- **Home** - Browse all products with featured listings
- **Product Detail** - View product details and comments
- **Create Product** - Add new products to marketplace
- **Edit Product** - Modify existing products
- **Profile** - Manage your products and view statistics

## 🎯 Key Components

### ProductCard
Beautiful product card with hover animations, image scaling, and creator info.

### Navbar
Sticky navigation with Mercato branding, theme selector, and user menu.

### CommentsSection
Interactive comments with user avatars, timestamps, and delete functionality.

### LoadingSpinner
Animated loading indicator with gradient effects.

## 🚀 Performance

- Optimized images with lazy loading
- Efficient state management with React Query
- Smooth animations using CSS transforms
- Responsive design for all screen sizes

## 📄 License

ISC

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Built with ❤️ for creators everywhere. Welcome to Mercato!
