import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Grocery from "../Grocery/Grocery";

const Shop = () => {
  var [Groceris, setGroceris] = useState([]);
  var [Chosed, setChosed] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then((res) => res.json())
    .then((data) => setGroceris(data));
  }, []);
  const handleCart = (Grocery) => {
    // console.log(Grocery);
    // console.log(Chosed);
    const exists = Chosed.find(product => product.id === Grocery.id);
    if(Chosed.length >= 4){
      alert('u can add only 4 item')
    }else if(exists){
      alert("alredy ase")
    }else{
      const newCart = [...Chosed, Grocery];
      setChosed(newCart);
    }
  };
  const removeItem = (Chose4) => {
    console.log(Chose4);
  };

  return (
    <div className='"container-fluid'>
      <div className="row container-fluid">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9
                order-2 order-sm-2 order-md-2 order-lg-1 order-xl-1 order-xxl-1"
        >
          <div className="row m-2 p-2 gy-4">
            {Groceris.map((Groceris) => (
              <Grocery
                key={Groceris.id}
                Grocery={Groceris}
                handleCart={handleCart}
              ></Grocery>
            ))}
          </div>
        </div>
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3
                order-1 order-sm-1 order-md-1 order-lg-2 order-xl-2 order-xxl-2"
        >
          <Cart datas={Chosed} removeItem={removeItem} ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
