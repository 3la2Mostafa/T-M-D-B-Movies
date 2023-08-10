import Movie from "./Movie";

const Modal = ({ filteredMovies })=>{
    console.log('filteredMovies: from modal',filteredMovies);
return(
    <>
        <button data-toggle="modal" data-target="#exampleModalLong"  className="btn btn-primary mx-1"style={{ borderRadius: '20px ', minWidth: '40px' }}>
            <i className="fa fa-search"></i>
        </button>
       
        <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className='row m-5'>
                    {filteredMovies.map((movie) => (
                    <div className="col-md-3 mb-4" style={{ width: '250px' }} key={movie.id}>
                    <div className="card" style={{ border: '1px solid gray', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)' }}>
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
                            <i className={`fa ${ movie.isFavorite ? 'fa-heart-fill' : 'fa-heart'} text-danger`}
                              onClick={() => movie.isFavorite
                                  ? handleDeleteFromFavorites(movie)
                                  : handleAddToFavorites(movie)
                              }
                            ></i>
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
    </>
)
}
export default Modal