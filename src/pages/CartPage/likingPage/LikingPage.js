import "./LikingPage.scss";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, Stack } from "@mui/system";
import {   ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from "@mui/material";

const LikingPage = () => {
  const itemData = [

    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg',
        title: 'Collection',
        city: 'Mexico',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-poster/original/603101f0-242d-426b-89a9-0f19e206e31d.jpeg',
        title: 'Collection',
        city: 'India',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1767970-poster/original/64a33796-1a1e-4dd3-bdaf-10eaad6b7917.jpeg',
        title: 'Collection',
        city: 'USA',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1677605-poster/original/9f6a8fdf-fc45-4731-b6ec-d21ddeec2324.jpeg',
        title: 'Collection',
        city: 'France',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066

    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
        title: 'Collection',
        city: 'Italy',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
        title: 'Collection',
        city: 'Japan',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
        title: 'Collection',
        city: 'China',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
        title: 'Collection',
        city: 'Germany',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
    {
        img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
        title: 'Collection',
        city: 'Australia',
        rating: '5.0',
        views: "3,310",
        about: "The Secret of haunted Hotel immersive Escape Room",
        amount: 3066,
    },
];

let scrl = useRef(null);
const [scrollX, setscrollX] = useState(0);
const [scrolEnd, setscrolEnd] = useState(false);



 //Slide click
 const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth+scrl.current.offsetWidth
    ) {
        setscrolEnd(true);
    } else {
        setscrolEnd(false);
    }
};



const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth+scrl.current.offsetWidth
    ) {
        setscrolEnd(true);
        
    } else {
        setscrolEnd(false);
    }
};
 

  return (
    <div className="LikingPage">
    <h2>You Might Also Like this</h2>
    <Container  className="topSeller" maxWidth="false" >
                    {scrollX !== 0 && (
                        <button
                            className="prev2 hover"
                            onClick={() => slide(-600)}
                            
                        >
                            <FontAwesomeIcon style={{ display:"flex", justifyContent:"center", alignItems:"center",alignSelf:"center", fontSize: 25, }} icon={faAngleLeft} />

                        </button>
                    )}
        <ImageList ref={scrl} onScroll={scrollCheck} style={{ overflow: "hidden",  animation: "rotate 10s linear infinite" }} cols={216} rowHeight="auto">
            {itemData.map((item, i) => (
                <ImageListItem key={i} style={{ borderRadius: 15, width: 220, backgroundColor: "white", margin:"2rem", height: 350 }}>
                     <img
                        style={{ height: "2rem",borderRadius:15,objectFit:"contain", }}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black"
                        }}
                        position="below"
                        actionIcon={
                            <IconButton size="small" disableRipple="false" disableFocusRipple="false"  style={{ justifyContent: "flex-start", alignItems: "flex-start", width:"80%" }}>
                                <Stack  direction="column"  style={{ justifyContent: "flex-start", alignItems: "baseline" }} >
                                    <Typography  style={{ fontSize: 14, justifyContent: "flex-start", alignItems:"baseline",color:"green", fontWeight:"600" }} color="black">{item.about}</Typography>
                                    <Typography  style={{ fontSize: 14,textAlign:"center",width:"100%",color:"rgba(0,0,0,0.5)"  , fontWeight:"450"}} >Orginial Price </Typography>
                                    <Typography  style={{ fontSize: 14,textAlign:"center",width:"100%",color:"red"  , fontWeight:"600"}} >Now &#8377; 200</Typography>
                                    <Typography  style={{ fontSize: 14,textAlign:"center", width:"100%",color:"rgba(0,0,0,0.5)" , fontWeight:"450" }} >(&#8377;20/100g)</Typography>
                                </Stack>
                            </IconButton>

                        }
                        actionPosition="left"
                    />
                    <button className="AddToCart"><FontAwesomeIcon className="CartLogo" icon={faCartPlus} /></button>

                </ImageListItem>


            ))}
        </ImageList>
        
        {scrolEnd===false ? (
                        <button
                            className="next2 hover"
                            onClick={() => slide(+600)}
                        >
                            <FontAwesomeIcon style={{ display:"flex", justifyContent:"center", alignItems:"center",alignSelf:"center", fontSize: 25, }} icon={faAngleRight} />
                        </button>
                    ):( <button
                        className="next2 hover"
                        onClick={() => slide(-scrl.current.scrollWidth)}
                    >
                        <FontAwesomeIcon style={{ display:"flex", justifyContent:"center", alignItems:"center",alignSelf:"center", fontSize: 25, }} icon={faAngleRight} />
                    </button>)
                    
                    
                    }

    </Container>
</div>
  );
};

export default LikingPage;
