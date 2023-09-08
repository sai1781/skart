import "./CarouselContainer.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";

const CarouselContainer = () => {
  const itemData = [
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg",
      title: "Collection",
      city: "Mexico",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-poster/original/603101f0-242d-426b-89a9-0f19e206e31d.jpeg",
      title: "Collection",
      city: "India",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1767970-poster/original/64a33796-1a1e-4dd3-bdaf-10eaad6b7917.jpeg",
      title: "Collection",
      city: "USA",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1677605-poster/original/9f6a8fdf-fc45-4731-b6ec-d21ddeec2324.jpeg",
      title: "Collection",
      city: "France",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Italy",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Japan",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "China",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Germany",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
  ];

  const navigate = useNavigate();

  const Clicked = ()=>{
    navigate("./gallery");
  }

  return (
    <div className="CarouselContainer">
      <div>
      <h1>Something</h1>

      </div>
      <Carousel
        autoPlay="true"
        interval={1000}
        className="Carousel"
        showThumbs="false"
        infiniteLoop="true"
        useKeyboardArrows={true}
       showArrows={false}
       showIndicators={true}
        showStatus={false}
        autoFocus={true}
        
      >
        {itemData.map((e, idx) => {
          return (
            <>
              <div className="CarouselMap">
                <div className="CarouselPhoto" onClick={()=>Clicked()}>
                  <img src={e.img} />
                </div>
                <div className="CarouselDetails" onClick={()=>Clicked()}>
                    <div className="CarouselDetailsTop" >
                      <div>left</div>
                      <div>middle</div>
                      <div>right</div>
                    </div>
                    <div className="CarouselDetailsMiddle" >as</div>
                    <div className="CarouselDetailsBottom" >
                      <h3>Shop</h3>
                    </div>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
