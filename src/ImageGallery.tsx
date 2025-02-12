import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState<{ url: string; width: number; height: number }[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/get-images") 
      .then((res) => res.json())
      .then((data) => {
        const imagePromises = data.map((url: string) => {
          return new Promise<{ url: string; width: number; height: number }>((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              resolve({ url, width: img.width, height: img.height });
            };
          });
        });

        Promise.all(imagePromises).then((imagesWithDimensions) => {
          imagesWithDimensions.sort((a, b) => (a.width * a.height) - (b.width * b.height));
          setImages(imagesWithDimensions);
        });
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "gray",
        gap: "10px",
      }}
    >
      {images.length > 0 ? (
        images.map(({ url, width, height }, index) => (
          <div key={index} style={{ flex: "0 0 calc(100% / 15)" }}>
            <img
              src={url}
              alt={`Image ${index + 1}`}
             
            />
          </div>
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default ImageGallery;
