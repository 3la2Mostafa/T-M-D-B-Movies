import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import { initializeMovies } from '../redux/reducers/moviesReducer';

export default function Movies() {
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  // Sorting movies based on selectedSortOption
  const sortedMovies = [...movies];
  if (selectedSortOption === 'AZ') {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selectedSortOption === 'ZA') {
    sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
  }

  useEffect(() => {
    dispatch(initializeMovies());
  }, [dispatch]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 10;
  const totalPages = Math.ceil(sortedMovies.length / moviesPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const moviesToDisplay = sortedMovies.slice(startIndex, endIndex);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSortOption(value);
    setCurrentPage(0); // Reset current page when changing sorting
  };

  return (
    <>
      <div className='container pt-4'>
        <select
          style={{ height: '50px',border:'1px solid',boxShadow: '0px 10px 10px -10px rgba(0, 0, 0, 1)' }}
          className='form-select form-select-lg mb-3 '
          aria-label='.form-select-lg example'
          value={selectedSortOption}
          onChange={handleSortChange}
        >
          <option defaultValue hidden>
            Sort By
          </option>
          <option value='AZ'>ِA to Z</option>
          <option value='ZA'>Z to A</option>
        </select>
      </div>

      <div className='row m-5'>
        {moviesToDisplay.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          containerClassName='pagination'
          activeClassName='active'
          previousLabel='Previous'
          nextLabel='Next'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
          breakClassName='page-item disabled'
          breakLinkClassName='page-link'
          pageClassName='page-item'
          pageLinkClassName='page-link'
        />
      </div>
    </>
  );
}
