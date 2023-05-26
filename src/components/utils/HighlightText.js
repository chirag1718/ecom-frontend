import React from "react";

const HighlightText = ({ text }) => {
  return (
    <div className=" my-10 h-full text-center w-auto">
      <span className="text-[70px] font-highlight text-black">
        {text}
      </span>
    </div>
  );
};

export default HighlightText;
