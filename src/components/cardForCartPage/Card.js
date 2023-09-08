import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



const Card = () => {

  const[count, setCount] = useState(1);

  const Adding = (value) =>{
    if(count <=1 && value <1){
      return
    }
    let value2 = count+value;
    setCount(value2);
  }

  return (
    <div className="Card">

      <img src="https://www.farmley.com/cdn/shop/products/1kgPremium-California-Almonds_600x.jpg?v=1681911495" />
      <div>
        <h3>product Name</h3>
        <h4>description</h4>
      </div>
      <h4>&#8377;123</h4>

        <div className="Adding">
        <FontAwesomeIcon className="delete" icon={faTrashCan} />

            <button onClick={()=>{Adding(-1)}}  className="leftButton">-</button>
            <p>{count}</p>
            <button onClick={()=>{Adding(+1)}} className="rightButton">+</button>
        </div>
      <h4>&#8377; 1550</h4>
    </div>
  );
};

export default Card;
