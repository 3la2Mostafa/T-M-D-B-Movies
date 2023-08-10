import axiosInstance from "../../axiosConfig/axiosInstance";

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return state.map(movie => movie.id === action.payload.id ? { ...movie, isFavorite: true } : movie);
    case 'DELETE_FROM_FAVORITES':
      return state.map(movie => movie.id === action.payload.id ? { ...movie, isFavorite: false } : movie);
    case 'ADD_MOVIES':
      return [...state, ...uniqueMovies(state, action.payload).map(movie => {
        return { ...movie, isFavorite: false }
      })]
    default:
      return state;
  }
}

export const initializeMovies = () => {
  return async dispatch => {
    const movies = await axiosInstance.get('/popular')
    console.log('movies', movies);
    dispatch({ type: 'ADD_MOVIES', payload: movies.data.results })
  }
}

const uniqueMovies = (movies, array) => {
  const set = new Set(movies.map(movie => movie.id))
  const uniqeArray = []
  array.forEach(element => {
    if (!set.has(element.id)) uniqeArray.push(element)
  });
  return uniqeArray;
}