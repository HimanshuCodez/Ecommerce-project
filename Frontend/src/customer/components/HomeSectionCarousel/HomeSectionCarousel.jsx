import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [11, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
        <div className="relative p-5">
      <AliceCarousel
        responsive={responsive}
        disableButtonsControls
        autoPlay
        // autoPlayInterval={1000}
        infinite
        items={items}

      />
      ;</div>
    </div>
  );
};

export default HomeSectionCarousel;
