import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData.jsx";


const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (<>
  <div className=" w-full sm:px-3 px-2 m-0 mx-auto ">
    <img   className="w-full h-full object-cover cursor-pointer " role="presentation" src={item.image} />
    </div>
  </>
  ));
  return <AliceCarousel 
  
  disableButtonsControls
  autoPlay
  autoPlayInterval={1000}
  infinite
  items={items} />;
};
export default MainCarousel;
