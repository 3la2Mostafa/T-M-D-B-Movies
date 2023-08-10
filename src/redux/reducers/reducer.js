const initialState = {
    loader:false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_LOADER":
        return { ...state, loader: action.payload };
      default:
        return state; 
    }
  }