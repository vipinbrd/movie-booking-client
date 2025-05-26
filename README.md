# Full-Stack Web Application MOive_Booking

A full-stack web application built with **React (Vite, Redux, Tailwind CSS)** for the frontend and **Spring Boot with MySQL** for the backend. This project demonstrates a modern monolithic architecture with RESTful APIs, state management, and responsive design.

---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MySQL](https://www.mysql.com/)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Spring Security](https://spring.io/projects/spring-security) *(if used)*

---

## 📁 Project Structure
/frontend
├── src/
│ ├── components/
│ ├── features/ # Redux slices
│ ├── App.jsx
│ ├── main.jsx
└── tailwind.config.js

/backend
├── src/main/java/com/example/...
│ ├── controller/
│ ├── model/
│ ├── repository/
│ ├── service/
└── application.properties

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm
- Java 17+
- MySQL

---

## 🔧 Setup Instructions

### Frontend (React with Vite)

```bash
cd frontend
npm install
npm run dev

