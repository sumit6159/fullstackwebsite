
  
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { productReducer } from "./reducers/ProductReducer";


const reducer = combineReducers({
     data : productReducer
  });

 


const store = createStore(
  reducer,
  
  applyMiddleware(ReduxThunk)
);

export default store;