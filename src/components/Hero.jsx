import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from './Modal';
import '../style/HeroStyle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = ()=>{
  const movies = useSelector((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() === '') {
      setIsModalOpen(false);
      toast.error('Please enter a search term');
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filteredMovies);
    }
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
//========================Style======================//
    const closeButtonStyle = {
    color: "white",
    fontSize: "25px",
    padding: "0px 10px 5px 10px",
    backgroundColor: "#191970",
    borderRadius: "15%",
    border: "none",
    position: "absolute",
    top: "-20px",
    right: "-15px",
    };
//========================Style======================//


    return(
        <>
        <div className="position-relative" >
          <img
              src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?cs=srgb&dl=pexels-nathan-engel-436413.jpg&fm=jpg&h=350&w=1600&fit=crop&_gl=1*1sqq3v5*_ga*MTg4ODI0MzA3NS4xNjkxNTUyNTYy*_ga_8JE65Q40S6*MTY5MTg4NDM4Mi4yLjEuMTY5MTg4NDM4NS4wLjAuMA.."
              alt="Background"
              className="w-100 logo"
              style={{ maxHeight: '300px', objectFit: 'cover' ,filter:'brightness(0.4)',height:'350px',borderRadius:'0px 0px 10px 10px'}}
          />

          {/* Text on Image */}
          <div className="w-100 position-absolute top-50 start-50 translate-middle p-5 heroTextContainer">
              <h1 className="text-white px-5 heroText" style={{fontFamily:'cursive'}}>Welcome.</h1>
              <h3 className="text-white px-5 heroText" style={{fontFamily:'cursive'}}>Millions of movies, TV shows and people to discover. Explore now.</h3>
          </div>

          {/* Search Bar */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x p-3 " style={{ width: '90%' }}>
            <div className="input-group py-2">
                <input
                    style={{ borderRadius: '20px', paddingRight: '40px' }} 
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button data-toggle="modal" 
                data-target="#exampleModalLong"
                className="btn btn-primary mx-1"
                style={{ borderRadius: '20px ', minWidth: '40px' }}
                onClick={handleSearchSubmit}
                
                >
                <i className="fa fa-search"></i>
                </button>
                </div>
            </div>
        </div>
        <div className="modal fade" id="exampleModalLong"
         tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}

        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Seaech Result</h5>
                <button style={closeButtonStyle} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <div className='row m-5 '>
  {filteredMovies.map((movie) => (
    <div className="col-md-4 mb-4 d-flex justify-content-center" key={movie.id}>
      <div className="card" style={{ border: '1px solid gray', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ height: '150px', borderRadius: '0px 0px 5px 5px' }}
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
        <div className="card-body text-center">
          <p className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {movie.title}
          </p>
          <div className="d-flex justify-content-center">
            <a href={`/MovieDetails/${movie.id}`} style={{ backgroundColor: '#191970', color: 'white' }} className="btn">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
    
  ))}
  
</div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default Hero


       
