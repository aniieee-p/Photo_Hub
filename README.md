# 📸✨ PhotoHub - Your Cute Photo Companion! 💕

<div align="center">

![PhotoHub Logo](https://img.shields.io/badge/📸✨-PhotoHub-ff69b4?style=for-the-badge&labelColor=2d3748)

**🌸 A super cute & modern photo management app built with React & Node.js! 🎀**

[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![AWS S3](https://img.shields.io/badge/AWS-S3_Storage-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/s3/)

[💖 Features](#-features) • [🚀 Quick Start](#-quick-start) • [📱 Cute Screenshots](#-cute-screenshots) • [🛠️ Tech Stack](#️-tech-stack) • [📖 API Docs](#-api-documentation)

</div>

---

## 🌟 Overview

PhotoHub is your adorable photo companion! 🥰 This super cute platform lets you upload, organize, and share all your precious memories with the most kawaii interface ever! ✨ With beautiful pastel vibes and powerful features, managing your photo collection has never been this fun! 💕

### 🎀 Key Highlights

- 🎨 **Kawaii UI/UX** - Absolutely adorable design with cute dark/light themes! 🌙☀️
- 🔐 **Super Secure** - JWT magic with bcrypt protection for your precious photos! 🛡️✨
- ☁️ **Cloud Cuteness** - AWS S3 keeps your memories safe in the cloud! ☁️💖
- 📱 **Mobile Friendly** - Looks amazing on every device, even your phone! 📲💕
- 🚀 **Lightning Fast** - Vite-powered speed that'll make you smile! ⚡😊
- 🎯 **Smart Organization** - Albums, favorites, and tags - all super intuitive! 🗂️💫

---

## 💖 Features

### 🔐 **Authentication & Security** 
- 👤 Cute user registration and login forms! 
- 🎫 JWT token magic for secure sessions! ✨
- 🔒 Super safe password protection with bcryptjs! 
- 🛡️ Protected routes that keep your photos safe! 💕

### 📸 **Photo Management Cuteness**
- **🎯 Drag & Drop Upload** - Just drag your cuties and drop! So easy! 🥰
- **📚 Album Organization** - Create the most adorable photo albums! 💕
- **💖 Favorites System** - Heart your favorite memories instantly! 
- **🗑️ Trash Management** - Oops recovery with soft delete magic! ✨
- **🏷️ Tag System** - Organize with cute custom tags! 
- **📊 Storage Tracking** - Keep track of your photo collection! 📈💫

### 🎨 **User Experience Magic**
- **📱 Responsive Design** - Gorgeous on every screen size! 💕
- **🌙☀️ Theme Support** - Switch between cute dark and light modes! 
- **🔔 Real-time Notifications** - Adorable toast messages! 🍞✨
- **🖼️ Grid View** - Beautiful photo grids with modal previews! 
- **🔍 Search & Filter** - Find your memories super quickly! 💫

### ⚡ **Performance & Storage Cuteness**
- **☁️ AWS S3 Integration** - Your photos live safely in the cloud! 💕
- **🚀 Optimized Loading** - Fast as lightning, smooth as silk! ✨
- **📏 File Size Management** - Smart tracking of all your files! 
- **📈 Scalable Architecture** - Grows with your photo collection! 🌱💖

---

## 🚀 Quick Start (Let's Get This Cuteness Running!) 

### Prerequisites 📋

Make sure you have these adorable tools installed:
- **Node.js** (v16 or higher) 🟢
- **MongoDB** (local or cloud - both are cute!) 🍃
- **AWS Account** (for S3 cloud magic!) ☁️✨

### 1️⃣ Clone This Cuteness! 🐑

```bash
git clone https://github.com/yourusername/photohub.git
cd photohub
```

### 2️⃣ Server Setup (Backend Magic!) ✨

```bash
cd server
npm install
```

Create a super cute `.env` file in the server directory:

```env
# Database Cuteness 🍃
MONGO_URI=mongodb://localhost:27017/photohub

# JWT Secret Magic ✨
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration 🚀
PORT=5000
NODE_ENV=development

# AWS S3 Cloud Magic ☁️💕
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-s3-bucket-name
```

Start the adorable server:

```bash
npm run dev
```

### 3️⃣ Client Setup (Frontend Cuteness!) 🎨

```bash
cd ../client
npm install
npm run dev
```

### 4️⃣ Access Your Cute App! 🎉

- **Frontend Cuteness**: http://localhost:5173 💕
- **Backend API Magic**: http://localhost:5000 ✨

---

## 📱 Cute Screenshots

<div align="center">

> 📸 **Adorable screenshots coming soon!** 🥰
> 
> This section will showcase the super cute PhotoHub interface including:
> - 🏠 **Dashboard** - Your main photo paradise! 💕
> - 📸 **Photo Grid** - Beautiful grid view that'll make you smile! ✨
> - 📁 **Albums** - Kawaii album organization! 🎀
> - 🌙 **Dark Mode** - Elegant dark theme for night owls! 🦉
> - 📱 **Mobile View** - Adorable responsive design! 💖

</div>

---

## 🛠️ Tech Stack (The Cute Tools We Used!) 

### Frontend Cuteness 🎨
- **⚛️ React 18** - Modern React with hooks and context magic! ✨
- **🚀 Vite** - Lightning-fast build tool that makes us happy! ⚡😊
- **🎨 CSS Modules** - Scoped styling for adorable components! 💕
- **🧭 React Router** - Smooth navigation between cute pages! 
- **📡 Axios** - HTTP client for API calls! 🌐
- **🎯 React Dropzone** - Drag & drop magic for uploads! ✨
- **🔥 React Hot Toast** - The cutest notifications ever! 🍞💖
- **✨ Lucide React** - Beautiful icons that sparkle! 

### Backend Magic 🔮
- **🟢 Node.js** - JavaScript runtime that powers everything! 
- **⚡ Express.js** - Web framework that makes APIs fun! 🎉
- **🍃 MongoDB** - NoSQL database with Mongoose ODM cuteness! 
- **🔐 JWT** - JSON Web Tokens for secure sessions! 🎫✨
- **🔒 bcryptjs** - Password hashing that keeps you safe! 🛡️
- **☁️ AWS S3** - Cloud storage for your precious photos! 💕
- **📁 Multer** - File upload middleware magic! ✨
- **🌐 CORS** - Cross-origin resource sharing! 🌍

### Development Tools 🔧💕
- **📦 npm** - Package management cuteness! 
- **🔄 Nodemon** - Auto-restart development server! 🔄✨
- **🌍 dotenv** - Environment variable magic! 🎭

---

## 📖 API Documentation (The Magic Endpoints!) ✨

### Authentication Endpoints 🔐💕

```http
POST /api/auth/register  # Join our cute community! 🥰
POST /api/auth/login     # Welcome back, cutie! 👋
GET  /api/auth/me        # Who's this adorable user? 🤔💕
```

### Photo Endpoints 📸✨

```http
GET    /api/photos          # Get all your cute photos! 📷💖
POST   /api/photos          # Upload new cuteness! 🎯
GET    /api/photos/:id      # Get that specific adorable photo! 🥰
PUT    /api/photos/:id      # Update photo details! ✏️✨
DELETE /api/photos/:id      # Say goodbye to photo! 👋
POST   /api/photos/:id/favorite  # Heart this cutie! 💖
```

### Album Endpoints 📚💕

```http
GET    /api/albums          # Get all your cute albums! 📖✨
POST   /api/albums          # Create new album magic! 🎨
GET    /api/albums/:id      # Get album with all its cuties! 📷💕
PUT    /api/albums/:id      # Update album details! ✏️
DELETE /api/albums/:id      # Remove album (carefully!) 🗑️
```

### User Endpoints 👤💖

```http
GET    /api/users/profile   # Get your adorable profile! 🥰
PUT    /api/users/profile   # Update your cuteness! ✨
GET    /api/users/storage   # Check your storage magic! 📊💕
```

---

## 🏗️ Project Structure (How We Organized This Cuteness!)

```
photohub/
├── 📁 client/                 # React frontend cuteness! 🎨
│   ├── 📁 src/
│   │   ├── 📁 components/     # Adorable reusable UI components! 💕
│   │   ├── 📁 pages/          # Super cute page components! 📄✨
│   │   ├── 📁 context/        # React context magic! 🔮
│   │   ├── 📁 utils/          # Helpful utility functions! 🛠️💖
│   │   └── 📄 main.jsx        # App entry point! 🚀
│   ├── 📄 package.json
│   └── 📄 vite.config.js
├── 📁 server/                 # Node.js backend magic! ✨
│   ├── 📁 config/             # Configuration cuteness! ⚙️💕
│   ├── 📁 middleware/         # Express middleware magic! 🔮
│   ├── 📁 models/             # MongoDB model definitions! 🍃
│   ├── 📁 routes/             # API route handlers! 🛣️✨
│   ├── 📁 uploads/            # Local file storage! 📁
│   ├── 📄 index.js            # Server entry point! 🚀
│   └── 📄 package.json
└── 📄 README.md               # This adorable file! 💕
```

---

## 🚀 Deployment (Share Your Cuteness With The World!)

### Frontend Deployment (Vercel/Netlify) 🌐💕

1. Build the adorable client:
```bash
cd client && npm run build
```

2. Deploy the `dist` folder to your favorite hosting platform! ✨

### Backend Deployment (Railway/Heroku) ☁️🚀

1. Set your cute environment variables on your hosting platform! ⚙️💖
2. Deploy the server directory with love! 💕
3. Make sure MongoDB and AWS S3 are configured perfectly! 🍃☁️✨

---

## 🤝 Contributing (Join Our Cute Community!)

We absolutely love contributions! 💕 Please follow these adorable steps:

1. **Fork** this cute repository! 🍴✨
2. **Create** a feature branch (`git checkout -b feature/amazing-cute-feature`) 🌟
3. **Commit** your changes (`git commit -m 'Add amazing cute feature'`) 💖
4. **Push** to the branch (`git push origin feature/amazing-cute-feature`) 🚀
5. **Open** a Pull Request and make us smile! 😊💕

### Development Guidelines 📋💖

- Follow our cute existing code style! 🎨
- Write meaningful commit messages that make us happy! 📝✨
- Add comments for complex logic (make it readable!) 💭
- Test your changes thoroughly! 🧪💕
- Update documentation as needed! 📚
- Keep the cuteness level high! 🥰

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments (Thank You To All The Cuties!)

- **React Team** - For the absolutely amazing React library! ⚛️💕
- **Vite Team** - For the lightning-fast build tool that makes us smile! ⚡😊
- **MongoDB** - For the super flexible database solution! 🍃✨
- **AWS** - For the reliable cloud storage magic! ☁️💖
- **Lucide** - For the most beautiful icons ever! ✨🎨

---

<div align="center">

**Made with 💖✨ by [Your Name](https://github.com/yourusername)**

🌟 **Star this repo if you found it adorable!** 🌟

[🐛 Report Bug](https://github.com/yourusername/photohub/issues) • [✨ Request Cute Feature](https://github.com/yourusername/photohub/issues) • [💬 Chat With Us](https://github.com/yourusername/photohub/discussions)

*Keep being awesome and cute! 🥰💕*

</div>