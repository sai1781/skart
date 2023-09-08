import Card from "../../components/cardForCartPage/Card";
import "./CartPage.scss";
import Total from "./Total/Total";
import LikingPage from "./likingPage/LikingPage";
import RecommendPage from "./recommendation/RecommendPage";

const CartPage = () => {
  return (
    <div className="cartPageMain">
      <h1>Your Shoping Basket</h1>

      <div className="cartPage">
        <div className="leftSide">
          <Card />
          <Card />
          <LikingPage />
          <RecommendPage />
        </div>
        <div className="rightSide">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// import Total from "../Total/Total";
// import Card from "../../../components/cardForCartPage/Card";
// import "./CartItems.scss"

// const CartItems = () => {

//     return(

//         <div className="CartItems">
//             <Card />
//             <Total />
//         </div>
//     )
// }

// export default CartItems;
