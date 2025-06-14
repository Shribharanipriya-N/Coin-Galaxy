import React from "react";
import img from "../assets/landingimage.png";
import img1 from "../images/logo.jpeg";
import { IoMdHeartEmpty } from "react-icons/io";

const ItemCard = () => {
  return (
    <div className="w-[250px]  h-[335px] bg-[#FFFFF0] border border-[#FFFF8F] shadow-lg  flex flex-col rounded-xl">
      <div>
        <img src={img1} className="w-[250px] h-[180px] rounded-t-xl" />
      </div>
      <div className="flex flex-col pl-3 pt-1 gap-2 ">
        <div>
          <h3 className="text-lg font-semibold">{"Title"}</h3>
          <h4>Period: {"2000-2015"}</h4>
          <div className="flex justify-between mr-3">
            <h3>
              ₹<b>{20}</b>
            </h3>
            <IoMdHeartEmpty size={25} />
          </div>
        </div>
        <div className="flex justify-around mr-3 ">
          <button className="text-sm rounded-lg w-[90px]  bg-border ">
            Add to cart
          </button>
          <button className=" text-sm rounded-lg  w-[95px] h-[30px] bg-border ">
            Buy now
          </button>
        </div>
        <button className="text-sm  flex  justify-end mr-5  underline">
          More info→
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
