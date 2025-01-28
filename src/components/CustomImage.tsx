import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = "100%",  
  height = "auto",
  style = {},      
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ ...style }} 
    />
  );
};

export default CustomImage;
