import React from "react";

const AddressCard = () => {
  return (
    <div className="p-4 bg-white rounded-md  space-y-3">
      <p className="text-lg font-semibold">Mintu Singh</p>
      <p className="text-gray-600">Delhi, Gokul Dham Market, 40001</p>
      <div className="space-y-1">
        <p className="text-sm font-semibold">Phone number</p>
        <p className="text-gray-800">9392912129</p>
      </div>
    </div>
  );
};

export default AddressCard;
