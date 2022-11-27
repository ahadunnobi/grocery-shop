import "./cart.css";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ datas, removeItem}) => {
  let Chose4 = [];
  for (const data of datas) {
    Chose4 = [...Chose4, data];
  }
// / / make condition therir i tnk that can work
  const choseAgain = () =>{
    Chose4 = [];
  }
  return (
    <div className="mt-5">
      <h2 className="pt-3">Chosed Grocery</h2>
      {
        Chose4.map((Chose4) => (
        <div
          className="mt-4 d-flex d-flex justify-content-between align-items-center"
          key={Chose4.id}
        >
          <img className="roun" src={Chose4.image} alt=""></img>
          <h5>{Chose4.name}</h5>
          <MdDeleteForever
            onClick={() => removeItem(Chose4)}
            className="fs-2 float-end"
          ></MdDeleteForever>
        </div>
      ))}
      <div className="d-flex flex-row justify-content-center mt-3">
        <button className="fw-semibold btn btn-outline-success" type="button">
          Chose 1 for me
        </button>
        <button
        onClick={choseAgain}
          className="ms-3 fw-semibold btn btn-outline-warning"
          type="button"
        >
          Chose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
