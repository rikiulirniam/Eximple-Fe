# Eximple - Learning Platform

Eximple adalah platform pembelajaran interaktif yang dirancang untuk membuat pendidikan lebih menarik dan menyenangkan. Platform ini menyediakan sistem pembelajaran berbasis level dengan gamification, AI assistant, leaderboard, dan achievement system.

## 🚀 Features

### Core Features
- **Learning Journey**: Sistem pembelajaran berbasis level dengan progress tracking
- **AI Agent**: Asisten AI untuk membantu siswa dalam belajar
- **Leaderboard**: Sistem ranking untuk memotivasi siswa
- **Achievement System**: Badge dan achievement untuk menandai pencapaian
- **Profile Management**: Manajemen profil pengguna dengan statistik
- **Points & Streak**: Sistem poin dan streak untuk gamification

### User Flow
1. **Registration & Authentication**: Registrasi dengan email verification (OTP)
2. **Profile Setup**: Setup kelas (SD/SMP/SMA), grade, dan subject
3. **Learning**: Menyelesaikan level-level pembelajaran
4. **Progress Tracking**: Melihat progress dan statistik
5. **Social Features**: Leaderboard dan achievement sharing

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI Framework
- **Vite 7.2.4** - Build tool dan dev server
- **React Router DOM 7.10.1** - Routing
- **Zustand 5.0.9** - State management
- **Tailwind CSS 4.1.17** - Styling
- **Framer Motion 12.23.25** - Animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vite Plugin Obfuscator** - Code obfuscation untuk production

## 📋 Prerequisites

- Node.js (v18 atau lebih baru)
- npm atau yarn
- Backend API server yang berjalan

## 🔧 Installation

### 1. Clone Repository

```bash
git clone 
cd eximple
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Buat file `.env` di root directory:

```env
# API Base URL
# For development, use localhost or dev tunnel URL
# For production, use your production API URL
VITE_API_BASE_URL=http://localhost:3001

# Google OAuth (Optional)
# Get your Client ID from Google Cloud Console
# See GOOGLE_LOGIN_SETUP.md for detailed setup instructions
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

**Catatan**: 
- Ganti `http://localhost:3001` dengan URL API backend Anda
- File `.env` sudah ada di `.gitignore` dan tidak akan di-commit
- Untuk development, bisa menggunakan proxy di `vite.config.js`
- Untuk Google Login, ikuti panduan di `GOOGLE_LOGIN_SETUP.md`

### 4. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📁 Project Structure

```
eximple/
├── public/                 # Static assets
│   ├── img/              # Images
│   └── fonts/            # Custom fonts
├── src/
│   ├── components/        # React components
│   │   ├── common/       # Reusable components (Navbar, Footer, etc.)
│   │   ├── getStarted/  # Onboarding components
│   │   ├── question/     # Profile setup components
│   │   └── theJourney/   # Main learning components
│   ├── hooks/            # Custom React hooks
│   ├── stores/           # Zustand stores
│   ├── services/         # API services
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .env                  # Environment variables (create this)
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## 🎯 Available Scripts

### Development
```bash
npm run dev          # Start development server
```

### Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint
```

## 🔌 API Integration

Aplikasi ini terintegrasi dengan backend API. Pastikan backend server berjalan dan URL API sudah dikonfigurasi di `.env`.

### API Endpoints yang Digunakan

- **Authentication**: `/api/auth/*`
- **Profile**: `/api/profile/*`
- **Learning**: `/api/learning/*`, `/api/levels/*`
- **Progress**: `/api/progress/*`
- **Quiz**: `/api/quiz/*`
- **Leaderboard**: `/api/leaderboard/*`
- **Achievements**: `/api/achievements/*`
- **AI Chat**: `/api/ai-chat/*`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL untuk API backend | `http://localhost:3001` |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Client ID (optional, untuk Google Login) | - |

## 🎨 Features Detail

### 1. Learning Journey
- Map pembelajaran interaktif dengan 10 level
- Progress tracking per level
- Unlock system berdasarkan completion
- Visual path connections antar level

### 2. Level System
- Setiap level memiliki materials (text, HTML, video)
- Introduction dan content materials
- Interactive exercises
- Time-based progression (cooldown system)

### 3. AI Agent
- Chat interface dengan AI assistant
- Session management
- Chat history
- Context-aware responses

### 4. Leaderboard
- Global leaderboard
- Personal ranking
- Top 3 podium display
- Multiple ranking types (total, weekly, monthly)

### 5. Achievement System
- Multiple achievement types
- Completion tracking
- Points rewards
- Visual badges

### 6. Profile
- User profile management
- Avatar upload
- Statistics display (points, streak)
- Profile completion

## 📱 Responsive Design

Aplikasi ini fully responsive dengan:
- Mobile-first approach
- Hamburger menu untuk mobile
- Adaptive layouts untuk tablet dan desktop
- Touch-friendly interactions

## 🔐 Authentication Flow

1. User register dengan email
2. Email verification via OTP
3. Profile completion (class, grade, subjects)
4. Access to learning journey

## 🎮 Gamification

- **Points System**: Earn points dari menyelesaikan level
- **Streak System**: Daily streak tracking
- **Achievements**: Unlock achievements dengan criteria tertentu
- **Leaderboard**: Compete dengan users lain

## 🐛 Troubleshooting

### CORS Errors
Jika mengalami CORS errors di development:
- Pastikan proxy di `vite.config.js` sudah dikonfigurasi
- Atau set `VITE_API_BASE_URL` di `.env` ke URL yang sama dengan proxy target

### API Connection Issues
- Pastikan backend server berjalan
- Check `VITE_API_BASE_URL` di `.env`
- Restart development server setelah mengubah `.env`

### Build Issues
- Pastikan semua dependencies terinstall: `npm install`
- Clear cache: hapus `node_modules` dan `package-lock.json`, lalu `npm install` lagi

## 📝 Development Notes

### State Management
- Menggunakan Zustand untuk global state
- Stores terpisah per domain (auth, profile, learning, progress, dll)
- Persist middleware untuk beberapa stores

### Code Quality
- ESLint untuk code linting
- No console.log statements (production-ready)
- Error handling yang comprehensive
- UTF-16 character filtering untuk clean display

### Animations
- Emerald particles animation saat complete level
- Fire animation saat streak activated
- Float animations untuk mascot characters

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output akan ada di folder `dist/`

### Production Environment

Set environment variable untuk production:
```env
VITE_API_BASE_URL=https://your-production-api.com
```

### Build Optimization

- Code obfuscation enabled untuk production
- Minification dengan Terser
- Asset optimization
- Tree shaking

**Note**: Pastikan backend API server sudah berjalan dan dikonfigurasi dengan benar sebelum menggunakan aplikasi ini.

