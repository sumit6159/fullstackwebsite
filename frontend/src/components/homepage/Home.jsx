import React, { Fragment, useEffect } from "react";

import "./home.css"
import ProductCard from "./ProductCard";
import { apiCallGetAll } from "../../redux/actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import laptop from "../../assets/laptop.jpg"
import headphones from "../../assets/headphones.jpg"
import mobile from "../../assets/mobile.jpg"


const Home = () => {
    
  const dispatch = useDispatch()
  const {data, loading} = useSelector((store)=>store.data)

  useEffect(()=>{
  
    dispatch(apiCallGetAll())
  }, [dispatch])
  return (
    <Fragment>
        
        <div className='container1'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={laptop} className="d-block w-100" alt="product" height="400px"/>
    </div>
    <div className="carousel-item">
      <img src={headphones} className="d-block w-100" alt="product" height="400px"/>
    </div>
    <div className="carousel-item">
      <img src={mobile} className="d-block w-100" alt="product" height="400px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {data &&
              data.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
       
    </Fragment>
  )
}
          

        


export default Home