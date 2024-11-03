# Todo List

A simple and intuitive to-do list application built with **React**, **TypeScript**, and **Tailwind CSS**. This project provides essential task management features with a clean, responsive UI.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Image](#project-image)
- [Contact](#contact)

---

## Features

- **Task Management**: Add, edit, and delete tasks.
- **Task Completion Tracking**: Mark tasks as completed or pending.
- **Responsive Design**: Optimized for desktop and mobile views.
- **Data Persistence**: Local storage to retain tasks after page reload.

---

## Technologies Used

- **React**: For building dynamic user interfaces.
- **TypeScript**: For static typing, enhancing code quality.
- **Tailwind CSS**: For efficient, responsive styling.
- **LocalStorage API**: For data persistence.

---

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dev-mabdulrehman/todo-list.git
   ```
   
2. **Install dependencies**:
   ```bash
   # Using npm
   npm install
   
   # OR using yarn
   yarn install
   ```

3. **Install Tailwind CSS**
    ```bash
    # Using npm
    npm install -D tailwindcss

    # Using yarn
    yarn add -D tailwindcss

    npx tailwindcss init

4. **Configure Tailwind CSS: Update tailwind.config.js to include your content paths.**
    ```bash
    module.exports = {
        content: ["./src/**/*.{js,jsx,ts,tsx}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }

5. **Add Tailwind CSS to your CSS file:**
    ```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

6. **Run the application**:
   ```bash
   # Using npm
   npm start
   
   # OR using yarn
   yarn start
   ```

The application will be accessible at \`http://localhost:3000\`.

---

## Project Image

![Project Image](https://github.com/dev-mabdulrehman/todo-list/blob/main/assets/images/TodoProjectImage.png)

## Contact

Developer: Muhammad Abdul Rehman  
Email: [dev.mabdulrehman@gmail.com](mailto:dev.mabdulrehman@gmail.com)