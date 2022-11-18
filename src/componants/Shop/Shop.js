import React, { useEffect, useState } from 'react';
import Chose from '../Chose/Chose';
import Grocery from '../Grocery/Grocery';

const Shop = () => {
        const [Groceris, setGroceris]=useState([]);

        useEffect(()=>{
                fetch('data.json')
                .then(res => res.json())
                .then(data => setGroceris(data))
        },[])
        return (
                <div className='"container-fluid'>
                <div className='row'>
                <div className='col-sm-9 p-3'>
                        <div className='row m-5'>
                      {
                        Groceris.map(Groceris =>
                        <Grocery 
                        key={Groceris.id}
                        Grocery={Groceris}
                        ></Grocery>)
                      } 
                      </div> 
                </div>
                <div className='col-sm-3 p-3'>
                <Chose ></Chose>
                </div>
                </div>
                </div>
        );
};

export default Shop;