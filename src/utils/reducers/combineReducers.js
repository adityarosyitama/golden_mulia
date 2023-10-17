import {combineReducers} from 'redux';
import authReducer from './authReducers';
import detailItemReducers from './detailItemReducers';
import transactionReducers from './transactionReducers';

const rootReducer = combineReducers({
  login: authReducer,
  produk: detailItemReducers,
  transaksi: transactionReducers,
});

export default rootReducer;
