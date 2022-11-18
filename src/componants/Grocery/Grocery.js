import React from 'react';

const Grocery = ({Grocery}) => {
        const {name, image, price, description}= Grocery;
        return (
                <div className='col-4 mt-3'>
                      <div className="card">
                        <img src={image} className="card-img-top " alt="..."/>
                        <div className="card-body">
                         <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{description}</p>
                        <div className="d-grid">
                        <button href="/" className="btn btn-outline-success">add to cart</button>
                        </div>
                        </div>
                      </div>  
                </div>
        );
};

export default Grocery;