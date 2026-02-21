# 🎬 Movie Explorer Backend API

A scalable backend API for a Movie Explorer application built with **Node.js, Express, Prisma ORM, and PostgreSQL**, featuring **JWT authentication**, **watchlist management**, and deployed on **Railway Cloud**.

---

## 🚀 Live API

👉 https://backend-movieexplorer-production.up.railway.app/

Open the link to check if the API is running.

---

## ✨ Features

* 🔐 JWT Authentication (Login & Protected Routes)
* 🗄 PostgreSQL Database using Prisma ORM
* ❤️ User Watchlist Feature

  * Add movie to watchlist
  * Update watchlist item
  * Delete watchlist item
  * View user watchlist
* ✅ Request Validation Middleware
* 🛡 Ownership checks to prevent unauthorized access
* ☁️ Cloud Deployment on Railway
* 🧪 API Testing with Postman
* ⚡ Clean MVC Architecture

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
 │    ├── authController.js
 │    ├── movieController.js
 │    └── watchlistController.js
 ├── routes/
 │    ├── authRoutes.js
 │    ├── movieRoutes.js
 │    └── watchlistRoutes.js
 ├── middleware/
 │    ├── authMiddleware.js
 │    └── validateRequest.js
 └── server.js

prisma/
 ├── schema.prisma
 └── migrations/
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

### 4️⃣ Run Database Migration

```
npx prisma migrate dev
```

---

### 5️⃣ Start Server

```
npm run dev
```

---

## 🔐 Authentication

Login returns a JWT token.

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
* 📊 Movie Recommendation ML Model
* 📑 Swagger API Documentation
* ⚡ Rate Limiting & Security Enhancements
* 🎮 Multiplayer features inspired by MMORPG systems

---

## 👨‍💻 Author

**Sathwik U Shetty**
GitHub: https://github.com/sathvik-04
LinkedIn: https://linkedin.com/in/sathwik-u-shetty

---

⭐ If you like this project, give it a star!
