import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

import Movie from './Movie'

export default function Favorites() {
  const fav = useSelector((state) => {
    console.log(state)
    return state.movies.filter((movie) => movie.isFavorite)
  })

  // start pagination
  const [currentPage, setCurrentPage] = useState(0)
  const moviesPerPage = 10 // Number of movies to display per page try 5
  const totalPages = Math.ceil(fav.length / moviesPerPage)

  // Create a function to handle page changes:
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected)
  }

  const startIndex = currentPage * moviesPerPage
  const endIndex = startIndex + moviesPerPage
  // new array moviesToDisplay by using the slice() method on the movies array
  const moviesToDisplay = fav.slice(startIndex, endIndex)

  // end

  return (
    <>
    <div className='d-flex justify-content-center align-items-center p-3'>
      <h1 style={{textAlign:'center',fontFamily:'cursive',borderBottom: '2px solid', width: '500px'}}>My Favorites Movies</h1>
    </div>
      <div className="row m-5">
        {moviesToDisplay.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange} //updating current page
          //pagination Styling
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="Previous"
          nextLabel="Next"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item disabled"
          breakLinkClassName="page-link"
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </div>
    </>
  )
}
{
}
