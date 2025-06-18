import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useReset } from '../contexts/ResetContext';
import '../css/NavBar.css'

const NavBar = () => {

  const navigate = useNavigate();
  const { triggerReset } = useReset();

  const handleHomeClick = () => {
    triggerReset();
    navigate("/");
  };

  return <nav className="navbar">
    <div className='navbar-brand'>
        <Link to="/"> <span className='first-letter'>N</span>ecFlics</Link>
    </div>
    <div className='navbar-links'>
        <Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link>
        <Link to="/favorites" className='nav-link'> Favorites</Link>
    </div>
  </nav>
}

export default NavBar