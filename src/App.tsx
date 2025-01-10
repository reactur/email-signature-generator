import React, { useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Twitter,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { signatures } from "./signatures";
import "./App.css";

function App() {
  const [selectedSignature, setSelectedSignature] = useState(0);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "Mitchel Rogers",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "www.example.com",
    linkedin: "linkedin.com/in/johndoe",
    twitter: "@johndoe",
    location: "San Francisco, CA",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          Email Signature Generator
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Your Information
            </h2>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace("_", " ")}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Preview
                </h2>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
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
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Choose Style
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
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
}

export default App;
