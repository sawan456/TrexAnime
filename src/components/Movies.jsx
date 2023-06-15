import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom';
import '../style/Movies.css'

const Movies = () => {
    
    const {movie,isLoading} = useGlobalContext();

    if(isLoading){
        return (
            <div className="">
                <div className="loading">Loading...</div>
            </div>
        );
    }

  return (
    
      <div className=" mainContainer">
        {movie.map((curMovie)=>{
            const {imdbID, Title,Poster,Year} = curMovie;
            const movieName = Title.substring(0,15);

            return <NavLink to={`movie/${imdbID}`} key={imdbID} >
                <div className="card">
                    
                        <h4>{movieName.length >= 15 ? `${movieName}...` : movieName}</h4>
                        <img src={Poster} alt={imdbID} />
                        <p>{Year}</p>
                    
                </div>
            </NavLink>;
        })}
      </div>
  )
}

export default Movies
