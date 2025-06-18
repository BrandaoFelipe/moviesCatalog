# Movies Catalog (React)

A React-based frontend for browsing and favoriting movies, with context-based state management and local persistence.

---

## 📦 Project Structure
```bash
src/
├── components/
│ └── MovieCard.jsx
├── context/
│ └── MovieContext.jsx
├── pages/
│ ├── Home.jsx
│ └── Favorites.jsx
├── services/
│ └── api.js
├── App.jsx
├── index.jsx
└── styles/
├── Home.css
├── Favorites.css
└── NavBar.css
```

## 🖼️ Preview

### 🏠 Home Page
![Home Page](https://raw.githubusercontent.com/BrandaoFelipe/moviesCatalog/refs/heads/main/src/assets/Home.png)

### ❤️ Favorites Page
![Favorites Page](https://raw.githubusercontent.com/BrandaoFelipe/moviesCatalog/refs/heads/main/src/assets/Favorites.png)


---

## 🌟 Features

- **Popular movies listing** – via `getPopularMovies()`.
- **Search feature** – search for movies with `searchMovies()`.
- **Favorites management** – add/remove movies, check favorite status.
- **Persistence** – favorites are stored in `localStorage`.
- **Global state** – via React Context (`MovieContext` and `useMovieContext`).
- **Navbar navigation** – "Home" and "Favorites" routing using React Router.
- **Custom hooks** – for easier and reusable access to the movie context.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 14  
- npm or yarn

### Installation

```bash
git clone https://github.com/BrandaoFelipe/moviesCatalog.git
cd moviesCatalog
npm install
npm start
```
## Then open http://localhost:5173 in your browser.

🧩 Key Concepts
⚙️ Movie Context (src/context/MovieContext.jsx)
Manages favorites state globally.

Synchronizes with localStorage.

Exposes methods: addFavorites, removeFromFavorites, isFavorite.

Use it in components with:

```bash
const { favorites, addFavorites, removeFromFavorites, isFavorite } = useMovieContext();
```

## 🔍 Home Page (src/pages/Home.jsx)
Loads popular movies on mount.

Uses a search form to query movies.

Displays results in a grid of MovieCards.

## ❤️ Favorites Page (src/pages/Favorites.jsx)
Displays all favorited movies.

Allows removing any of them.

## 🎥 Movie Card (src/components/MovieCard.jsx)
Shows movie poster, title, and favorite icon.

Handles click events to add/remove from favorites via context.

## 🎨 Styling
CSS files are organized modularly:

NavBar.css – navigation bar and hover effects.

Home.css – main layout, search bar, movie grid.

Favorites.css – styling for favorites list.

Add hover/focus styles to buttons or links using classes like .nav-link, .search-button, etc.

## 🛠️ Customization / Improvement Ideas
Add pagination.

Integrate filtering by genre or rating.

Enhance UI with modals, animations, or responsive design.

Replace fetch with axios.

Add unit and integration tests.

Extract custom hooks (e.g., useSearchMovies).

## ✅ Why This Setup?
This project is built to be lightweight and easy to understand:

Makes use of React functional components and hooks.

Demonstrates Context API for global state.

Persists data locally with localStorage.

Modular component design ensures clarity and flexibility.

🙌 Contribution
## ⭐ Feel free to star ⭐ and improve the project!
To contribute:

Fork the repo

Create a new branch (feature/my-feature)

Commit changes (git commit -m "Add new feature")

Push to branch (git push origin feature/my-feature)

Open a Pull Request

📄 License
This project is open-sourced under the MIT License.

📫 Contact
Felipe Brandão

GitHub: @BrandaoFelipe

Feel free to reach out if you'd like to collaborate or discuss improvements!


