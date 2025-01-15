import React, { useState, ChangeEvent } from "react";
import { Copy, Check } from "lucide-react";
import { signatures } from "./signatures";
import "./App.css";

type FormData = {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  twitter: string;
  location: string;
  image: string;
};

const App: React.FC = () => {
  const [selectedSignature, setSelectedSignature] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "Orion Vega",
    title: "Interstellar Data Architect",
    company: "Quantum Horizons Ltd.",
    email: "orion.vega@gmail.com",
    phone: "+1 (888) 999-8765",
    website: "quantumhorizons.com",
    linkedin: "linkedin.com/in/OrionVega",
    twitter: "@datajourney",
    location: "Alpha Centauri",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  
  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string;
        setFormData((prev) => ({ ...prev, image: imageData }));
        localStorage.setItem("uploadedImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = async () => {
    const signatureElement = document.querySelector(".signature-preview");
    if (signatureElement) {
      try {
        const doctype = "<!DOCTYPE html>";
        const htmlContent = `
          ${doctype}
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Signature</title>
            </head>
            <body>
              ${signatureElement.outerHTML}
            </body>
          </html>
        `;

        await navigator.clipboard.writeText(htmlContent);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-indigo-800">
          Email Signature Generator
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Your Information
            </h2>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-600 capitalize"
                  >
                    {key.replace("_", " ")}
                  </label>
                  {key === "image" ? (
                    <input
                      id={key}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  ) : (
                    <input
                      id={key}
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Preview
                </h2>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  {copied ? "Copied!" : "Copy HTML"}
                </button>
              </div>
              <div className="signature-preview">
                {signatures[selectedSignature]({ ...formData })}
              </div>
            </div>

            {/* Signature Selection */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Choose Style
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSignature(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSignature === index
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300"
                    }`}
                  >
                    Style {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
