# 🍽️ Chuks Kitchen

A modern, responsive food ordering interface built with **React**, **Vite**, and **TailwindCSS** — designed for web and mobile screens.

This project is part of *Chuks Kitchen*, a customizable restaurant ordering UI you can extend into a full standalone web app.

---

## 🧠 Tech Stack

- ⚛️ React  
- 🚀 Vite  
- 💅 TailwindCSS  
- 🔁 React Router  
- 📦 React Icons

---

## 📁 Project Structure
chucks-kitchen/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md

index.html
Main HTML entry file where the React app mounts.

package.json
Defines project dependencies, scripts, and metadata.


vite.config.js
Vite configuration for fast development and optimized builds.

Source Folder (src/)
src/
├── assets/
├── components/
├── pages/
├── context/
├── App.jsx
├── main.jsx
└── index.cssmain.jsx
Application entry point. Renders the root React component into the DOM and sets up providers.

App.jsx
Main application layout. Handles routing and shared UI structure (Navbar, Footer, etc.).

index.css
Global styles and Tailwind base imports.

UI Organization
assets/
Stores static resources:
images
icons
logos

components/
Reusable UI building blocks used across pages:
Discover
ChefSpecials
Hero
Footer
NavBar
MenuCategories
PopularCategories

This keeps UI consistent and avoids duplication.

pages/
Route-level screens mapped to URLs:

WelcomePage.jsx → landing screen
Menu.jsx → food listing
Home.jsx -> Home Page
YourCart.jsx → cart interface
Login.jsx → authentication
SignUp.jsx → account creation
SignIn.jsx → account login/signin


## 🎨 Design Interpretation

The Figma design was implemented using a component-driven approach in React with TailwindCSS for styling. The goal was to preserve visual hierarchy, spacing, and responsiveness while keeping the codebase scalable and reusable.

### 🧩 Component Mapping

Each major UI block in the design was translated into a reusable React component:

- Navigation and layout → shared layout structure in `App.jsx`
- Food item cards → reusable card component
- Menu categories → filterable category component
- Cart items → structured cart card with quantity controls
- Pages → mapped directly to React Router routes

This ensured consistent styling and easier maintenance across screens.

---

### 📱 Responsive Implementation

The design included desktop and mobile layouts. Responsiveness was implemented using Tailwind’s mobile-first utilities:

- Vertical stacking on small screens
- Horizontal layout for desktop cart items
- Flexible spacing using `flex`, `grid`, and responsive breakpoints
- Image scaling with fixed aspect ratios
- Touch-friendly button sizing for mobile devices

---

### 🎯 Visual Accuracy Decisions

To match the design closely:

- Spacing and alignment were recreated using Tailwind spacing scale
- Typography hierarchy was preserved using font weight and size utilities
- Color palette was approximated using Tailwind theme values
- Repeated UI patterns were abstracted into reusable components

Where exact values were not available in the design, consistent design system choices were applied.

---


This approach ensures the UI is not only visually accurate but also production-ready.

---

## 🚀 Getting Started

### 1️⃣ Clone repo

bash
git clone https://github.com/Isaac025/Chuks-Kitchen.git
cd Chuks-Kitchen/chucks-kitchen

Install dependencies
npm install

Run dev server
npm run dev

Dependencies
react
react-dom
react-router-dom
react-icons
tailwindcss
@vitejs/plugin-react
vite

## Routes / Pages
| / | WelcomePage | Landing page of Chuks Kitchen |
| /home | Home | Home page of Chuks Kitchen |
| /menu | Menu | Displays available meals |
| /your-cart | YourCart | Shows selected items and quantities |
| /signin | SignIn | User sign-in page |
| /signup | SignUp | User account creation |
| /food-details/:id | FoodDetails |Food details Page |



