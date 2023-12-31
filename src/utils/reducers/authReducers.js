const initialState = {
  loginData: {
    id_user: '',
    nama: '',
    email: '',
    password: '',
    status: '',
    last_update: '',
    // requestToken: '',
  },
  isLoggedIn: false,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        loginData: action.data,
      };
    case 'RESET_DATA_LOGIN':
      return {
        ...state,
        loginData: {
          id_user: '',
          nama: '',
          email: '',
          password: '',
          status: '',
          last_update: '',
        },
        isLoggedIn: false,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default loginReducers;
