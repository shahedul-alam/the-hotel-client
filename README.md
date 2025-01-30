# The Hotel Booking Platform

## 🌍 Live Demo
[https://the-hotel-8a122.web.app/](#) 

## 📌 Project Overview
The **Hotel Booking Platform** is a modern web application that provides users with a seamless and interactive experience for **discovering, booking, and managing hotel rooms**. Built with **React, React Router v7, and Axios**, the platform ensures smooth navigation, secure authentication, and an engaging user experience.

## 🚀 Features
### 🔹 Homepage
- **Interactive Banner** with a call-to-action button leading to the rooms page.
- **Map Integration** using `react-leaflet` to display hotel locations.
- **Featured Rooms** showcasing the top 6 rated rooms.
- **Special Offers & Promotions** popup.
- **User Reviews Section** with real user feedback.

### 🔹 User Authentication
- **Email & Password-based Authentication** with Firebase.
- **Google Authentication** for easy login.
- **Secure JWT Authentication** for protected routes.
- **User-specific Bookings Management.**

### 🔹 Rooms & Booking
- **Rooms Page** displaying all available rooms with images and descriptions.
- **Room Details Page** with in-depth details, reviews, and a booking option.
- **Secure Booking System** ensuring no overbookings.
- **Date Selection with `react-datepicker`.**
- **Booking Confirmation Modal.**
- **Booking Cancellation (Only before the check-in date).**
- **Update Booking Date** with real-time validation.

### 🔹 User Reviews
- **Authenticated Users Only** can leave reviews.
- **Star Rating System** using `react-rating-stars-component`.
- **Timestamped Reviews** sorted by the latest first.

### 🔹 Access Control
- **Protected Routes** ensure users can only access their bookings.
- **Non-logged-in users are redirected to login before booking.**

### 🔹 Additional Features
- **404 Page** with a fun error message and redirect option.
- **Responsive Design** for desktop, tablet, and mobile views.
- **SEO Optimized** using `react-helmet-async`.
- **Toast Notifications** using `react-toastify`.

## 🛠️ Tech Stack
### **Frontend**
- **React 18**
- **React Router v7**
- **Axios** for API calls
- **Tailwind CSS & DaisyUI** for UI design
- **React Icons** for rich UI elements
- **React Toastify & SweetAlert2** for notifications
- **React Datepicker** for booking date selection
- **React Helmet Async** for SEO optimization
- **Lottie React** for animations

### **Backend**
- **Node.js & Express.js**
- **MongoDB (Mongoose)** for database storage
- **JWT Authentication** for secure user sessions
- **Firebase Authentication** for user login

## 📦 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/shahedul-alam/the-hotel-client.git
cd hotel-booking
```
### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Create `.env` File**
```env
VITE_API_URL=your_backend_url
VITE_FIREBASE_API_KEY=your_firebase_key
```
### **4️⃣ Run the Development Server**
```sh
npm run dev
```
### **5️⃣ Build for Production**
```sh
npm run build
```

## 🚀 Deployment
This project can be deployed using **Vercel, Netlify, or Firebase Hosting** for the frontend and **Render, Vercel, or Railway** for the backend.

## 📝 Author
Developed by **Shahedul Alam**  
📧 Contact: shaheedalamcontact@gmail.com  

---
### ⭐ If you like this project, consider giving it a star ⭐

