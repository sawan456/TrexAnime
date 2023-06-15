import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../context';
import { NavLink } from 'react-router-dom';
import '../style/SingleMovie.css'
import { useGlobalContext } from '../context'


const SingleMovie = () => {
    
    const {cartItems,setCartItems} = useGlobalContext();

    const {id} = useParams();

    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState("");
    const [isError,setIsError] = useState({show: "false", msg: ""});


    const getDevil = async(url)=>{
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                });
                setMovie(data);
            }else{
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            getDevil(`${API_URL}&i=${id}`);
        },800);
        return ()=> clearTimeout(timeOut);
    },[id]);

    if(isLoading){
        return (
            <div className="">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    function abc(cartData) {
        alert("Item Added Successfully !")
        setCartItems([...cartItems, cartData])
        localStorage.setItem('datas', JSON.stringify([...cartItems, cartData]))
    }

  return (
  
      <section className="movie-section">
        <div className="movie-card">
            <figure>
                <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
                <p className="title">{movie.Title}</p>
                <p className="card-text">{movie.Released}</p>
                <p className="card-text">{movie.Genre}</p>
                <p className="card-text">{movie.imbdRating}</p>
                <p className="card-text">{movie.Country}</p>
                <NavLink to="/" className="back-btn" >
                 <button>Go Back</button>
                </NavLink>
                 <button className='btn' onClick={() => abc(getDevil)} >Watch Later</button>
            </div>
        </div>
      </section>
  
  )
}

export default SingleMovie
