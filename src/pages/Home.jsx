import { React, useState, useEffect } from 'react'
import { useReset } from '../contexts/ResetContext'
import { searchMovies, getPopularMovies } from '../services/api'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'


const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { resetCounter } = useReset();

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [resetCounter]);

    const handleSearch = async(e) => {
        e.preventDefault(); //this makes sure it wont have the default [useState] behavior.
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);

        }catch(err){
            setError("Failed to search movies...")
        }finally{
            setLoading(false)
        }
        setSearchQuery("");
    };


    return <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>

            <input type="text"
                placeholder='Search for movies'
                className='search-input'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} //this is how you update the state of an input 
            />

            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? <div className="loading">Loading...</div> : 
        <div className='movies-grid'>
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}
        </div>}
    </div>
}

export default Home