const initialState = {
  transaction: [],
};

const detailItemReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSAKSI':
      return {
        ...state,
        // isLoggedIn: true,
        searchHist: action.data,
      };
    case 'RESET_SEARCH':
      return {
        ...state,
        transaction: [],
        // isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default detailItemReducers;
