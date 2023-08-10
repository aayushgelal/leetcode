import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ButtonClick from "./ButtonClick";

export default function AlertCard({ message, handleClick }) {
  console.log(handleClick);
  return (
    <div className="fixed top-0 -z-10 h-full w-full  flex items-center justify-center">
      <div className="m-10 h-fit shadow-lg bg-gray-100 border-none font-bold p-10 align-middle">
        <p className="font-bold"> The Answer is:</p>
        <br></br>
        <p className=" font-medium text-center">{message} </p>
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={handleClick}
            className=" transition-transform hover:bg-sky-800 bg-sky-950 text-white p-2 rounded-3xl px-10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
