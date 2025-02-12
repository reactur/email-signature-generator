import React, { useState } from "react";

const SocialMediaIcons = () => {
  const [dimensions, setDimensions] = useState({ width: 48, height: 48 });
  const socialMediaIcons = [
    {
      platform: "Facebook",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/733/733547.png",
        "https://cdn-icons-png.flaticon.com/512/124/124010.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
      ],
    },
    {
      platform: "Twitter",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/733/733579.png",
        "https://cdn-icons-png.flaticon.com/512/124/124021.png",
        "https://cdn-icons-png.flaticon.com/512/145/145812.png",
        "https://cdn-icons-png.flaticon.com/512/889/889147.png",
        "https://cdn-icons-png.flaticon.com/512/174/174876.png",
      ],
    },
    {
      platform: "Instagram",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        "https://cdn-icons-png.flaticon.com/512/1409/1409946.png",
        "https://cdn-icons-png.flaticon.com/512/2111/2111421.png",
        "https://cdn-icons-png.flaticon.com/512/1077/1077042.png",
      ],
    },
    {
      platform: "LinkedIn",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/145/145807.png",
        "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        "https://cdn-icons-png.flaticon.com/512/1409/1409945.png",
        "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
      ],
    },
    {
      platform: "YouTube",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        "https://cdn-icons-png.flaticon.com/512/733/733590.png",
        "https://cdn-icons-png.flaticon.com/512/3670/3670147.png",
    
      ],
    },
    {
      platform: "WhatsApp",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/733/733585.png",
        "https://cdn-icons-png.flaticon.com/512/124/124034.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968841.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968850.png",
     
      ],
    },
    {
      platform: "TikTok",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/3046/3046122.png",
        "https://cdn-icons-png.flaticon.com/512/3046/3046130.png",
        "https://cdn-icons-png.flaticon.com/512/3046/3046126.png",
        "https://cdn-icons-png.flaticon.com/512/3046/3046129.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968812.png",
      ],
    },
    {
      platform: "Discord",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968757.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968759.png"
      ]
    },
    {
      platform: "Reddit",
      icons: [
        "https://cdn-icons-png.flaticon.com/512/2111/2111589.png",
        "https://cdn-icons-png.flaticon.com/512/1409/1409938.png",
      ]
    }
    
  ];

  const handleDownload = (url: string) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; 
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
      
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high"; 

        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png"); 
        link.download = `resized-image-${dimensions.width}x${dimensions.height}.png`;
        link.click();
      }
    };

    img.onerror = () => {
      alert("Failed to load the image.");
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center">
        <div>
          <label htmlFor="width" className="block font-semibold mb-1">
            Width (px):
          </label>
          <input
            type="number"
            id="width"
            name="width"
            value={dimensions.width}
            onChange={handleInputChange}
            className="border rounded-lg px-2 py-1 w-24"
            min={1}
          />
        </div>
        <div>
          <label htmlFor="height" className="block font-semibold mb-1">
            Height (px):
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={dimensions.height}
            onChange={handleInputChange}
            className="border rounded-lg px-2 py-1 w-24"
            min={1}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialMediaIcons.map((social) => (
          <div key={social.platform} className="text-center">
            <h3 className="text-lg font-semibold mb-2">{social.platform}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {social.icons.map((icon, index) => (
                <div key={index} className="text-center">
                  <img
                    src={icon}
                    alt={`${social.platform} icon ${index + 1}`}
                    className="w-12 h-12 rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={() => handleDownload(icon)}
                    className="mt-2 px-2 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIcons;