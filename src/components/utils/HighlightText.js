import React from "react";

const HighlightText = ({ text1, text2, text3 }) => {
  return (
    <div className=" my-10 h-full text-center w-auto">
      <span className="text-[70px] font-highlight text-black">
        {text1}
        {text2}
        {text3}
      </span>
    </div>
  );
};

export default HighlightText;
