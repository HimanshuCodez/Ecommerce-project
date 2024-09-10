import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel.jsx";
import { mens_kurta } from "../../../Data/mens_kurta.jsx";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20  flex  flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Pant"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Lehnga"}/>
        <HomeSectionCarousel data={mens_kurta}sectionName={"Women's Tops"} />
       
      </div>
    </div>
  );
};

export default HomePage;
