import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <div className="SectionA">
        <div className="SectionAFirst">
          <h1>first part</h1>
        </div>
        <div className="SectionASecond">
          <div className="SectionASecondOne">
              <h1>second part</h1>
              <div className="SectionASecondOne2">
                <h1>image</h1>
              </div>
              <h1>Third</h1>
            </div>
          <div className="SectionASecondTWO">  
            <h1>Information</h1>
          </div>
        </div>
        <div className="SectionAThird">
          <h3>Brand name</h3>
          <h3>Brand name</h3>
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
