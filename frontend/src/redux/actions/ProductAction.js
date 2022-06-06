import axios from "axios"

const SETLOADING = 'SETLOADING'

const GETALL = "GETALL"

const setLoading = (data)=>({type: SETLOADING, payload:data})

const getAll = (data)=>({type:GETALL, payload:data})

const apiCallGetAll = ()=>{
    
    return async(dispatch)=>{
        try{
            dispatch(setLoading(true))
            const res = await axios.get('https://e-commerceprojectbackend.herokuapp.com/api/v1/products')
            dispatch(getAll(res.data.data))
        }
        catch(err){
            console.log(err)
        }
    }
}

export {
    SETLOADING, apiCallGetAll,GETALL , getAll , setLoading
}