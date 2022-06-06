import {
    GETALL,
    SETLOADING
} from "../actions/ProductAction"

const initialState = {
    data : [],
    loading: false,

}

export const productReducer = (store=initialState, {type, payload})=>{
    switch (type){
        case GETALL:
            return {...store, data:payload, loading:false}
        case SETLOADING:
            return {...store, loading:payload}
        default:
            return store       
    }
}