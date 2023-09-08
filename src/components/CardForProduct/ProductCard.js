import "./ProductCard.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const Productcard = ({gridChange}) => {
    
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
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
    {
      img: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg",
      title: "Collection",
      city: "Australia",
      rating: "5.0",
      views: "3,310",
      about: "The Secret of haunted Hotel immersive Escape Room",
      amount: 3066,
    },
  ];

  const navigate = useNavigate();
  const Navigation = () =>{
    navigate("/Gallery/ProductPage");
  }


  return (
    <div className="ProductCard">
      <h2>Productcard</h2>
      <Box className="Box">
        <ImageList className="ImageList" cols={gridChange} gap={40}>
          {itemData.map((item) => (
            <ImageListItem onClick={()=>Navigation()} className="ImageListItem" key={item.img}>
              <img
                src={`${item.img}?w=100&fit=crop&auto=format`}
                srcSet={`${item.img}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Stack gap={2}>
                <ImageListItemBar
                  position="below"
                  style={{marginTop:"0.5rem",color: "gold" }}
                  subtitle={item.title}
               
                />
                <ImageListItemBar
                  position="below"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                    subtitle={item.city}
                />
                <ImageListItemBar
                  position="below"
                  subtitle={
                    <span>
                      &#8377;{item.amount}&nbsp;
                      <strike>&#8377;{item.amount + item.amount}</strike>
                      &nbsp;(51% Off)
                    </span>
                  }
                />
                <ImageListItemBar
                  position="below"
                  style={{ color: "green" }}
                  subtitle={<span>OfferPrice &#8377; {item.amount}</span>}
                />
              </Stack>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default Productcard;
