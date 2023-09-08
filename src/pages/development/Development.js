import "./Development.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Development = () => {
  const dummyData = [
    {
      title: "hats",
      imageUrl:
        "https://i.pinimg.com/564x/bc/8c/b9/bc8cb9f6def4fca6bf6a04f9a697efdc.jpg",
      id: 1,
      linkUrl: "shop",
      Brand1: "Nike",
      Brand2: "Puma",
      Brand3: "perfomax",
      Discount: "Flat 30% OFF",
    },
    {
      title: "women's wear",
      imageUrl:
        "https://i.pinimg.com/564x/39/5f/ea/395fea17039e44bad90c874c0935f9fe.jpg",
      id: 2,
      linkUrl: "shop",
      Brand1: "Jockey",
      Brand2: "Addidas",
      Brand3: "Yonex",
      Discount: "UPTO 50% OFF",
    },
    {
      title: "Men's Wear",
      imageUrl:
        "https://i.pinimg.com/564x/41/f8/8d/41f88d79bf3b6109575f3b7393ba6817.jpg",
      id: 3,
      linkUrl: "",
      Brand1: "Adidas",
      Brand2: "Puma",
      Brand3: "perfomax",
      Discount: "Flat 30% OFF",
    },
  ];

  return (
    <div className="DevelopmentPage">
      <h1>Development</h1>
      <Carousel >
        {dummyData.map((e, idx) => {
          return (
            <div className="CarouselMap">
              <img src="https://i.pinimg.com/564x/bc/8c/b9/bc8cb9f6def4fca6bf6a04f9a697efdc.jpg" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Development;
