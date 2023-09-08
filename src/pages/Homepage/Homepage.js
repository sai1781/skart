import { useEffect } from "react";
import Directory from "../../components/directory/Directory";
import FooterPage from "../footer/FooterPage";
import "./Homepage.scss";
import Carousel from "../../components/Carousel/CarouselContainer";

const Homepage = (props) => {
  console.log(props)
  
  return (
    <div className="homepage">
      <Carousel />
      <Directory />
    </div>
  );
};

export default Homepage;
