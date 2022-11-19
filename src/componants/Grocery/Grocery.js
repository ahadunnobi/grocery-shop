import React from 'react';
import {  HiOutlineShoppingCart } from "react-icons/hi"
const Grocery = ({Grocery, handleCart}) => {
        // console .log(Grocery);
        const {name, image, price, description}= Grocery;
        return (
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4'>
                      <div className="card">
                        <img src={image} className="card-img-top " alt="..."/>
                        <div className="card-body">
                         <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{description}</p>
                        <div className="d-grid">
                        <button onClick={()=>handleCart(Grocery)} className="btn btn-outline-success">ADD TO CART <HiOutlineShoppingCart className='ms-2 fs-3'></HiOutlineShoppingCart></button>
                        </div>
                        </div>
                      </div>  
                </div>
        );
};

export default Grocery;