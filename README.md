# 🍽️ Custom Recipe Page (Nespresso Test Project)

## 📌 Project Overview
This project is a **custom recipe page** that:
- Dynamically **fetches recipes** from an API.
- Displays recipes in a **grid layout** with:
  - **Recipe title**
  - **Cooking time**
  - **Difficulty level**
  - **Recipe image**
  - **View Recipe** link
- Provides **filters** to:
  - Filter recipes by **difficulty** (`Easy` / `Medium`).
  - Filter by **maximum cooking time** (user-defined).
  - Switch between **English and Spanish** recipes.

---

## 🚀 How to Run the Project

### 1️⃣ **Run in a Browser (No Installations Required)**
This method works for everyone, as it **does not require additional software**.

1. **Download the project files** (or clone the repository):
   ```sh
   git clone https://github.com/your-username/recipe-page.git
   cd recipe-page

## 🚀 How to Run the Project

### 2️⃣ Open `index.html` in a Browser
This method does not require additional software:

- **Windows:** Double-click `index.html`.
- **Mac/Linux:** Right-click `index.html` → Open with **Chrome** / **Firefox** / **Edge**.
- The recipe page will load, and recipes will be fetched automatically.

---

### 3️⃣ Run with a Simple HTTP Server
If you experience issues due to **CORS (Cross-Origin Resource Sharing)** while fetching API data, use a simple HTTP server.

#### **Using Node.js (Recommended)**
1. Install **Node.js** (if not installed) from [nodejs.org](https://nodejs.org/).
2. Open a terminal and navigate to the project folder by running:  
   **cd path/to/recipe-page**
3. Start a local server by running:  
   **npx serve**
4. Open the displayed URL (usually `http://localhost:3000`) in a browser.

#### **Using Python (Alternative)**
If you have **Python installed**, you can start a simple server:

- For **Python 3**, run:  
  **python -m http.server 5500**
- For **Python 2**, run:  
  **python -m SimpleHTTPServer 5500**

Then open **http://localhost:5500** in your browser.

---

## 🎯 Features & Functionality

### ✅ **Recipe Grid**
- Dynamically displays recipes fetched from the API.
- Each recipe card includes:
  - **Title**
  - **Cooking time**
  - **Difficulty level**
  - **Recipe image**
  - **Link to view the full recipe**

### ✅ **Filters**
- **Filter by Difficulty:** Easy / Medium
- **Filter by Cooking Time:** User-defined max time
- **Language Switcher:** English / Spanish

### ✅ **Responsive Design**
- The page is **fully responsive** and works on desktop, tablet, and mobile devices.

## 🛠️ Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **Fetch API** (for fetching recipes)
- **CORS Proxy** (to avoid API restrictions)