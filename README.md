# 📸 PhotoHub

<div align="center">

![PhotoHub Logo](https://img.shields.io/badge/📸-PhotoHub-ff6b6b?style=for-the-badge&labelColor=2d3748)

**A modern, full-stack photo management application built with React & Node.js**

[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![AWS S3](https://img.shields.io/badge/AWS-S3_Storage-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/s3/)

[✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [📱 Screenshots](#-screenshots) • [🛠️ Tech Stack](#️-tech-stack) • [📖 API Documentation](#-api-documentation)

</div>

---

## 🌟 Overview

PhotoHub is a sleek, modern photo management platform that allows users to upload, organize, and share their precious memories. With a beautiful, responsive interface and powerful backend, it provides a seamless experience for managing your photo collection.

### ✨ Key Highlights

- 🎨 **Beautiful UI/UX** - Modern, responsive design with dark/light theme support
- 🔐 **Secure Authentication** - JWT-based auth with bcrypt password hashing
- ☁️ **Cloud Storage** - AWS S3 integration for reliable photo storage
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Optimized with Vite and efficient API design
- 🎯 **Intuitive Organization** - Albums, favorites, and smart categorization

---

## ✨ Features

### 🔐 **Authentication & Security**
- User registration and login
- JWT token-based authentication
- Secure password hashing with bcryptjs
- Protected routes and middleware

### 📸 **Photo Management**
- **Drag & Drop Upload** - Easy photo uploading with react-dropzone
- **Album Organization** - Create and manage photo albums
- **Favorites System** - Mark photos as favorites for quick access
- **Trash Management** - Soft delete with recovery options
- **Tag System** - Organize photos with custom tags
- **Storage Tracking** - Monitor your storage usage

### 🎨 **User Experience**
- **Responsive Design** - Beautiful UI that works on all devices
- **Theme Support** - Dark and light mode toggle
- **Real-time Notifications** - Toast notifications for user feedback
- **Grid View** - Elegant photo grid with modal preview
- **Search & Filter** - Find photos quickly with advanced filtering

### ⚡ **Performance & Storage**
- **AWS S3 Integration** - Reliable cloud storage for photos
- **Optimized Loading** - Fast image loading and caching
- **File Size Management** - Automatic file size tracking
- **Scalable Architecture** - Built to handle growing photo collections

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **AWS Account** (for S3 storage)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/photohub.git
cd photohub
```

### 2️⃣ Server Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/photohub

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-s3-bucket-name
```

Start the server:

```bash
npm run dev
```

### 3️⃣ Client Setup

```bash
cd ../client
npm install
npm run dev
```

### 4️⃣ Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📱 Screenshots

<div align="center">

> 📸 **Screenshots coming soon!** 
> 
> Take some screenshots of your PhotoHub application and add them here to showcase:
> - 🏠 **Dashboard** - Main photo management interface
> - 📸 **Photo Grid** - Beautiful grid view of photos
> - 📁 **Albums** - Album organization and management
> - 🌙 **Dark Mode** - Elegant dark theme support
> - 📱 **Mobile View** - Responsive design on mobile devices

**To add screenshots:**
1. Take screenshots of your running application
2. Create a `screenshots/` folder in your repository
3. Save images as: `dashboard.png`, `photo-grid.png`, `albums.png`, `dark-mode.png`
4. Update the README with: `![Dashboard](screenshots/dashboard.png)`

**Alternative:** Upload to GitHub Issues and copy the generated URLs, or use services like [Imgur](https://imgur.com) for hosting.

</div>

---

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 18** - Modern React with hooks and context
- **🚀 Vite** - Lightning-fast build tool and dev server
- **🎨 CSS Modules** - Scoped styling for components
- **🧭 React Router** - Client-side routing
- **📡 Axios** - HTTP client for API calls
- **🎯 React Dropzone** - Drag & drop file uploads
- **🔥 React Hot Toast** - Beautiful notifications
- **✨ Lucide React** - Beautiful icon library

### Backend
- **🟢 Node.js** - JavaScript runtime
- **⚡ Express.js** - Web application framework
- **🍃 MongoDB** - NoSQL database with Mongoose ODM
- **🔐 JWT** - JSON Web Tokens for authentication
- **🔒 bcryptjs** - Password hashing
- **☁️ AWS S3** - Cloud storage for photos
- **📁 Multer** - File upload middleware
- **🌐 CORS** - Cross-origin resource sharing

### Development Tools
- **📦 npm** - Package management
- **🔄 Nodemon** - Auto-restart development server
- **🌍 dotenv** - Environment variable management

---

## 📖 API Documentation

### Authentication Endpoints

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Photo Endpoints

```http
GET    /api/photos          # Get all user photos
POST   /api/photos          # Upload new photo
GET    /api/photos/:id      # Get specific photo
PUT    /api/photos/:id      # Update photo details
DELETE /api/photos/:id      # Delete photo
POST   /api/photos/:id/favorite  # Toggle favorite
```

### Album Endpoints

```http
GET    /api/albums          # Get all user albums
POST   /api/albums          # Create new album
GET    /api/albums/:id      # Get album with photos
PUT    /api/albums/:id      # Update album
DELETE /api/albums/:id      # Delete album
```

### User Endpoints

```http
GET    /api/users/profile   # Get user profile
PUT    /api/users/profile   # Update user profile
GET    /api/users/storage   # Get storage usage
```

---

## 🏗️ Project Structure

```
photohub/
├── 📁 client/                 # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable UI components
│   │   ├── 📁 pages/          # Page components
│   │   ├── 📁 context/        # React context providers
│   │   ├── 📁 utils/          # Utility functions
│   │   └── 📄 main.jsx        # App entry point
│   ├── 📄 package.json
│   └── 📄 vite.config.js
├── 📁 server/                 # Node.js backend
│   ├── 📁 config/             # Configuration files
│   ├── 📁 middleware/         # Express middleware
│   ├── 📁 models/             # MongoDB models
│   ├── 📁 routes/             # API routes
│   ├── 📁 uploads/            # Local file storage
│   ├── 📄 index.js            # Server entry point
│   └── 📄 package.json
└── 📄 README.md
```

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the client:
```bash
cd client && npm run build
```

2. Deploy the `dist` folder to your hosting platform

### Backend (Railway/Heroku)

1. Set environment variables on your hosting platform
2. Deploy the server directory
3. Ensure MongoDB and AWS S3 are properly configured

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Team** - For the lightning-fast build tool
- **MongoDB** - For the flexible database solution
- **AWS** - For reliable cloud storage
- **Lucide** - For the beautiful icons

---

<div align="center">

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

⭐ **Star this repo if you found it helpful!** ⭐

[🐛 Report Bug](https://github.com/yourusername/photohub/issues) • [✨ Request Feature](https://github.com/yourusername/photohub/issues) • [💬 Discussions](https://github.com/yourusername/photohub/discussions)

</div>