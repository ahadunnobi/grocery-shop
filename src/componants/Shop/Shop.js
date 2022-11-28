import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Grocery from "../Grocery/Grocery";
import "./shop.css";

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
    const exists = Chosed.find((product) => product.id === Grocery.id);
    if (Chosed.length >= 4) {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      document.getElementById("massage").innerText = "You can add only 4 item";
      const span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    } else if (exists) {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      document.getElementById("massage").innerText = "Already added in list";
      const span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    } else {
      setChosed([...Chosed, Grocery]);
    }
  };
  const removeItem = (Chose4) => {
    // const indexOfObject = Chosed.indexOf(Chose4);
    // const removed = Chosed.splice(indexOfObject, 1);
    // setChosed(removed);
  };
  const choseOne = (Chose4) => {
    const random = Chose4[Math.floor(Math.random() * Chose4.length)];
    setChosed([random]);
  };
  const choseAgain = () => {
    setChosed([]);
  };
  return (
    <div className='"container-fluid'>
      {/* modallllll */}
      <div id="myModal" className="mdal">
        <div className="modal-contant">
          <div className="modal-header">
            <h5 className="modal-title">Error alert</h5>
            <span className="close">&times;</span>
          </div>
          <div className="modal-body p-5">
            <div className="d-flex">
              <h2 className="mx-auto" id="massage">
                {" "}
                null
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
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
          <Cart
            datas={Chosed}
            removeItem={removeItem}
            choseAgain={choseAgain}
            choseOne={choseOne}
          ></Cart>
        </div>
      </div>
      {/* f&Q */}
    <div className="p-5 m-3">
      <h1 className="text-center m-3"> Q&A</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             How react works?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            React is an efficient, flexible, and open-source JavaScript framework library.
            It lets us create reusable components so that our code is easy to read and maintain. React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Props vs State
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            Props are inputs to components. They are data passed down from a parent component to a child component.The primary purpose of props in React is Pass custom data to your component and Trigger state changes.on the other hand State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              how useState  work?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            useState is a function that allows you to manage state in your React components. It takes a single argument, which is the initial state, and returns an array with two values: the current state and a function that allows you to update it.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Shop;
