import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites, deleteFromFavorites } from '../redux/actions/favAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Movie({ movie }) {
  const dispatch = useDispatch()

  const handleAddToFavorites = (movie) => {
    console.log('Received movie:', movie)
    dispatch(addToFavorites(movie))
    toast.success(<div><b>{movie.title}</b> Added to Favorites</div>);

  }

  const handleDeleteFromFavorites = (movie) => {
    dispatch(deleteFromFavorites(movie))
    toast.error(<div><b>{movie.title}</b> Removed from Favorite</div>);
  }

  return (
    <>
    <div className="col-md-3 mb-4" style={{ width: '250px' }} key={movie.id}>
      <div className="card" style={{ border: '1px solid gray', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)' }}>
      <ToastContainer />
        <div style={{ position: 'relative' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ height: '300px',borderRadius:'0px 0px 5px 5px' }}
            className="card-img-top"
            alt="movie"
          />
                <div
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-15px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#f9ca24',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid yellow',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {movie.vote_average}
      </div>
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {movie.title}
            </h5>
            <p className="card-text" style={{ maxHeight: '60px', lineHeight: '20px', overflow: 'hidden',}}>
              {movie.overview}
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <a href={`/MovieDetails/${movie.id}`} style={{backgroundColor:'#191970',color:'white'}} className="btn mr-2">
                Details
              </a>
              <i
                style={{fontSize:'25px'}}
                className={`${ movie.isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} text-danger`}
                aria-hidden="true" 
                onClick={() =>{

                  console.log('isFavorite:', movie.isFavorite);
                  movie.isFavorite? handleDeleteFromFavorites(movie) : handleAddToFavorites(movie)
                } 
                }
              ></i>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
