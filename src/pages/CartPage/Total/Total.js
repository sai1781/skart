import "./Total.scss";

const Total = () => {
  return (
    <div className="Total">
      <div className="Horiz ttt">
        <h3>Subtotal</h3>
        <p>&#8377;123</p>
      </div>
      <div className="Horiz">
        <div className="Verti">
          <h3>Shipping Fees</h3>
          <p>
            Delivery to <span>AKP</span>
          </p>
        </div>
        <p>&#8377; 123</p>
      </div>
      <div className="Verti">
        <h3>Coupon/Discount</h3>
        <span>Enter a coupon code</span>
      </div>
      <div className="Horiz TotalValue">
        <div className="Verti">
          <h4>Total</h4>
          <span>incl. Tax</span>
        </div>
        <h4>&#8377; 123</h4>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Total;
