
export const addToFavorites = (movie) => {
    console.log('Received movie:', movie);
    return {
      type: 'ADD_TO_FAVORITES',
      payload: movie,
    };
  };

export const deleteFromFavorites = (movie) => {
  return {
    type: 'DELETE_FROM_FAVORITES',
    payload: movie,
  }
};
  