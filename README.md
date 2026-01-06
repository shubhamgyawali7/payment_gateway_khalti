# payment_gateway_khalti - Shubham Gyawali

## MERN Stack Payment Project with Khalti Sandbox

This repository contains a **MERN ( Express.js, React.js, Node.js)** application integrated with the **Khalti Sandbox Payment Gateway**.  
It demonstrates how to build a full-stack payment system with a React frontend and a Node.js backend.
```bash
https://gyawali-paymentkhalti.netlify.app/
```
---

## 📂 Project Structure

```

payment/
├── client/ # React frontend (Vite + TailwindCSS)
├── server/ # Node.js + Express backend
├── README.md # Project documentation
└── .gitignore
```
---

## 🚀 Features

- MERN stack setup (MongoDB, Express, React, Node)
- Khalti Sandbox integration for payment testing
- RESTful API for handling transactions
- Secure environment variable management (`.env`)
- TailwindCSS for modern UI styling
- React Router for navigation

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/shubhamgyawali7/payment_gateway_khalti.git
```

### 2. Install dependencies

---Backend:
```bash
cd server
npm install express cors dotenv
npm install --save-dev nodemon
```
---Frontend:
```
cd ../client
npm install react react-dom react-router-dom tailwindcss @tailwindcss/vite
```

### 3. Configure environment variables

---Backend:
```
KHALTI_SECRET_KEY=your_khalti_secret_key
PORT=
VITE_API_URL=frontend_url
```
---Frontend:
```bash
VITE_URL=http://localhost:5000
KHALTI_PUBLIC_KEY=your_khalti_public_key
API_URL=backend_url
```
---

### 4. Run the project

---Backend:
```bash
cd server
npm start
```
---frontend:
```bash
cd ../client
npm run dev
```
### This project uses Khalti Sandbox for testing payments.

    Sandbox keys can be generated from Khalti Developer Portal.
     https://admin.khalti.com/samagri/kpg_manual.pdf

### The test the payment work or not check khalti payment gateway integration docments

## Shubham Gyawali

