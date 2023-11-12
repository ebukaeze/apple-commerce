import React from "react";

interface props {
  title: string;
  onClick: () => void;
  width: string;
  padding: string;
  loading?: boolean;
  bg: string;
  color: string;
  weight: string;
  fontSize: string;
}

const Button = ({
  title,
  onClick,
  width,
  fontSize,
  padding,
  loading,
  bg,
  color,
  weight,
}: props) => {
  return (
    <button
      className={`ease group inline-flex relative py-4 ${
        width ? width : "w-auto"
      } ${bg ? bg : "bg-transparent"} ${fontSize ? fontSize : "text-base"}
    rounded-lg cursor-pointer items-center justify-center box-border outline-1 
    border border-black ${padding ? padding : "px-8"}
    ${color ? color : "text-white"} ${weight ? weight : "font-medium"}
    hover:bg-gray-800 hover:text-white transition-all duration-100
    
    `}
    >
      {loading ? "loading..." : title}
    </button>
  );
};

export default Button;
