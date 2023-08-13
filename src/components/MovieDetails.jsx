import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import NotFound from './NotFound';
import axiosInstance from '../axiosConfig/axiosInstance';



export default function MovieDetails() {
    const navigate = useNavigate() 
    const { id } = useParams();
    const [MovieDetails,setMovieDetails] = useState({});
    const [error, setError] = useState(null);

    useEffect(()=>{
        axiosInstance.get(`/${id}`).then((response)=>{
          console.log(response.data);
  
          setMovieDetails(response.data);
  
        }).catch((error)=>{
          setError(error.message);
          console.log(error);
        });
    },[id]);

    if (error) {
        return <NotFound />;
      }

  const handelGoBack = () => {
    navigate('/');
  };

  return (
    <>
    <section className="py-5 ">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-4">
            <img className="card-img-top mb-5 mb-md-0 " style={{height:'500px',width:'350px',borderRadius:'10px'}} src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`} alt="Movie Poster" />
          </div>
          <div className="col-md-6 px-5">
            <h1 className="display-5 fw-bolder">{MovieDetails.title}</h1>
            <div className="small mb-1">Release_date : {MovieDetails.release_date}</div>
            <div className="fs-5 mb-2">
              <span>  {`Tagline : ${MovieDetails.tagline}`}</span>
            </div>
            <span><b>Rating :</b> {` ${MovieDetails.vote_average}`}</span>

            <span></span>
            <p className="lead"><b>Description</b> :{`${MovieDetails.overview}`}</p>
            <div className="d-flex">
              <button onClick={handelGoBack} className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>
                Back To Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
