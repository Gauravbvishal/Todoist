# 📝 Todo App (Node.js + Express + Sequelize + MySQL)

A simple and efficient **Task Management Application** built with  
**Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**.  

This project demonstrates CRUD operations (Create, Read, Update, Delete) with a structured **MVC architecture**, server-side rendering using **Pug**, and database handling using **Sequelize**.

---

## 🚀 Features
- ➕ Add new tasks with **priority** and **deadline**
- 📃 View all tasks in a clean card-based UI
- ❌ Delete tasks easily
- ⚡ Sequelize ORM for smooth database operations
- 🎨 Pug template engine for server-side rendering
- 🏗️ Follows **MVC architecture**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **Templating Engine:** Pug
- **Other:** dotenv, body-parser

---

## 📂 Project Structure

project-root/
│── model/ # Sequelize models (e.g., Todo.js)
│── controllers/ # Route handlers (business logic)
│── routes/ # Express routes
│── views/ # Pug templates (index, showtasks, layouts)
│── public/ # Static files (CSS, JS)
│── .env # Environment variables (ignored by Git)
│── .gitignore # Ignored files/folders
│── app.js # Main Express app entry
│── package.json # Dependencies & scripts

## 🖼️ Screenshots
➕ Add Task Page
![Add Task Page](assets/createTask.png)

### 📌 Add Task Page
![Task List Page](assets/allTask.png)