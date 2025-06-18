import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext'
import { ResetProvider } from './contexts/ResetContext';
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import './css/App.css'

function App() {

  return (
    <ResetProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />

          </Routes>
        </main>
      </MovieProvider>
    </ResetProvider>
  );
}

export default App
