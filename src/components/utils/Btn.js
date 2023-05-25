import React from "react";
const Btn = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-10 h-12 w-full font-poppins">
      <button className="w-40 p-3 border-2 hover:border-4 active:scale-95 transition-all ease-in duration-100 border-black">
        {text}
      </button>
    </div>
  );
};

export default Btn;
