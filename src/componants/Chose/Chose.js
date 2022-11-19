import './chose.css'
import { MdDeleteForever } from 'react-icons/md'

const Chose = ({ datas }) => {
  let Chose4 = [];
  for (const data of datas) {
    Chose4 = [...Chose4, data];
  }
  return (
    <div className='mt-5'>
        <h2 className='pt-3'>Chosed Grocery</h2>
      {Chose4.map((Chose4) => (
        <div className='m-2 d-flex d-flex justify-content-between align-items-center' key={Chose4.id}>
          <img className="roun" src={Chose4.image} alt=""></img>
          <h5>{Chose4.name}</h5>
          <MdDeleteForever  className='fs-2 float-end'></MdDeleteForever>
        </div>
      ))}
      ;
    </div>
  );
};

export default Chose;
