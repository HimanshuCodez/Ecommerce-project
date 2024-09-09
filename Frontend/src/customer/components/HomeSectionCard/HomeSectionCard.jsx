import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.meesho.com/images/products/433812983/ij42a_400.webp"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
        <p className="text-sm mt-2 text-gray-500">
          Men solid pure cotton kutra
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
