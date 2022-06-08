import axios from "axios"

// const SETLOADING = 'SETLOADING'

// const GETALL = "GETALL"

// const setLoading = (data)=>({type: SETLOADING, payload:data})

// const getAll = (data)=>({type:GETALL, payload:data})

// const apiCallGetAll = (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0)=>
    
//      async(dispatch)=>{
//         try{
//             dispatch(setLoading(true))
//             let link = `https://e-commerceprojectbackend.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
//             if(category){
//                 link = `https://e-commerceprojectbackend.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
//             }
//             const res = await axios.get(link)
//             dispatch(getAll(res.data.products))
//         }
//         catch(err){
//             console.log(err)
//         }
//     }


// export {
//     SETLOADING, apiCallGetAll,GETALL , getAll , setLoading
// }


import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
   
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
  } from "../consts/productConstant";

  export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `https://e-commerceprojectbackend.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `https://e-commerceprojectbackend.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`https://e-commerceprojectbackend.herokuapp.com/api/v1/product/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };