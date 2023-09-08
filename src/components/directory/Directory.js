import MenuItem from "../Menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const dummyData = [
    {
      title: "hats",
      imageUrl:
        "https://i.pinimg.com/564x/bc/8c/b9/bc8cb9f6def4fca6bf6a04f9a697efdc.jpg",
      id: 1,
      linkUrl: "shop",
    },
    {
      title: "women's wear",
      imageUrl:
        "https://i.pinimg.com/564x/39/5f/ea/395fea17039e44bad90c874c0935f9fe.jpg",
      id: 2,
      linkUrl: "shop",
    },
    {
      title: "Men's Wear",
      imageUrl:
        "https://i.pinimg.com/564x/41/f8/8d/41f88d79bf3b6109575f3b7393ba6817.jpg",
      id: 3,
      linkUrl: "",
    },
    {
      title: "jackets",
      imageUrl:
        "https://i.pinimg.com/originals/31/78/5b/31785bcdfd9c009c54f2777059750a94.jpg",
      id: 4,
      size: "large",
      linkUrl: "",
    },
    {
      title: "Shoes",
      imageUrl:
        "https://i.pinimg.com/564x/3d/00/3f/3d003f22a715ac3eb58b8bd01eb669e4.jpg",
      id: 5,
      size: "large",
      linkUrl: "",
    },
  ];

  return (
    <div className="directory-menu">
      {dummyData.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default Directory;
