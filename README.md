# 🎬 Movie Explorer Backend API

A scalable backend API for a Movie Explorer application built with **Node.js, Express.js, Prisma ORM, and PostgreSQL**, featuring **JWT authentication**, **user watchlist management**, and deployed on **Railway Cloud**.

---

## 🚀 Live API

👉 https://backend-movieexplorer-production.up.railway.app/

Open the link to check if the API is running.

---

## ✨ Features

* 🔐 JWT Authentication (Login & Protected Routes)
* ❤️ User Watchlist System

  * Add movie to watchlist
  * Update watchlist item
  * Delete watchlist item
  * View user watchlist
* 🎬 Movie API routes
* 🗄 PostgreSQL Database using Prisma ORM
* ✅ Request Validation Middleware
* 🛡 Ownership checks for secure data access
* ⚡ Clean MVC Architecture
* ☁️ Railway Cloud Deployment
* 🧪 API Testing with Postman
* 📦 Database migrations & seeding with Prisma

---

## 🛠 Tech Stack

**Backend**

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL (Neon DB)
* JWT Authentication

**Tools**

* Git & GitHub
* Railway Deployment
* Postman Testing
* VS Code

---

## 📁 Project Structure

```
src/
 ├── config/
 │    └── DB.js
 ├── controllers/
 │    ├── authcontroller.js
 │    └── watchlistcontroller.js
 ├── routes/
 │    ├── authRoutes.js
 │    ├── movieRoutes.js
 │    └── watchlistRoutes.js
 ├── middleware/
 │    ├── authMiddleware.js
 │    ├── errorMiddleware.js
 │    └── validateRequest.js
 ├── validators/
 │    ├── authValidators.js
 │    ├── movieValidators.js
 │    └── watchlistValidators.js
 ├── utils/
 │    └── generateToken.js
 └── server.js

prisma/
 ├── schema.prisma
 ├── migrations/
 └── seed.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/sathvik-04/backend--movie_explorer.git
cd backend--movie_explorer
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Create `.env` File

```
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_secret_key
PORT=5001
```

---

### 4️⃣ Run Prisma Migration

```
npx prisma migrate dev
```

(Optional seed data)

```
node prisma/seed.js
```

---

### 5️⃣ Start Server

```
npm run dev
```

---

## 🔐 Authentication

Login returns JWT token.

Use token in headers:

```
Authorization: Bearer <token>
```

---

## 📡 Example API Endpoints

### Auth

```
POST   /auth/register
POST   /auth/login
```

### Movies

```
GET    /movies
GET    /movies/:id
```

### Watchlist

```
GET    /watchlist
POST   /watchlist
PUT    /watchlist/:id
DELETE /watchlist/:id
```

---

## 🧪 Testing

Tested API using **Postman**, including edge cases:

* Invalid login
* Missing fields
* Expired tokens
* Unauthorized watchlist access

---

## ☁️ Deployment

Backend deployed on **Railway** with environment variables configured and connected to **Neon PostgreSQL** database.

---

## 📌 Future Improvements

* 🔄 Refresh Token Authentication
* 📑 Swagger API Documentation
* ⚡ Rate Limiting & Security Enhancements
* 🎯 Movie Recommendation ML Model
* 🎮 Multiplayer features inspired by MMORPG systems

---

## 👨‍💻 Author

**Sathwik U Shetty**
GitHub: https://github.com/sathvik-04
LinkedIn: https://linkedin.com/in/sathwik-u-shetty

---

⭐ If you like this project, consider giving it a star!
