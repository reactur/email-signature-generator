import React, { useState, ChangeEvent } from "react"
import {  Check, Upload, Loader2, Download } from 'lucide-react'
import { signatures } from "./signatures"
import type { FormData } from "./types/signatures"
import Features from "./components/features"


//keeping it because its not paid
const CLOUDINARY_UPLOAD_PRESET = "upload_preset"
const CLOUDINARY_CLOUD_NAME = "dkiow1fed"

const App: React.FC = () => {

  const [selectedSignature, setSelectedSignature] = useState<number>(0)
  const [copied, setCopied] = useState<boolean>(false)
  const [uploading, setUploading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: "James McGill",
    title: "Criminal Lawyer",
    company: "Saul Goodman & Associates",
    email: "saulgoodman@gmail.com",
    phone: "+1 (505) 503-4455",
    website: "https://www.bettercallsaul.com",
    linkedin: "https://www.linkedin.com/in/saulgoodman",
    twitter: "https://twitter.com/BetterCallSaul",
    facebook: "https://www.facebook.com/BetterCallSaul",
    instagram: "https://www.instagram.com/BetterCallSaul",
    youtube: "https://www.youtube.com/BetterCallSaul",
    tiktok: "https://www.tiktok.com/@BetterCallSaul",
    github: "https://github.com/BetterCallSaul",
    location: "Albuquerque, New Mexico",
    image: "https://res.cloudinary.com/dkiow1fed/image/upload/c_crop,g_auto,h_1200,w_1200/v1737818956/Jimmy_McGill_c6ytb1.webp",
  });
  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!CLOUDINARY_UPLOAD_PRESET || !CLOUDINARY_CLOUD_NAME) {
      console.error("Cloudinary configuration is missing")
      return
    }

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const data = await response.json()
      setFormData((prev) => ({ ...prev, image: data.secure_url }))
    } catch (error) {
      console.error("Error uploading image:", error)
    } finally {
      setUploading(false)
    }
  }

  const downloadHtmlFile = () => {
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
              <title>Email Signature</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 20px;
                  background-color: #f5f5f5;
                }
              </style>
            </head>
            <body>
              ${signatureElement.outerHTML}
            </body>
          </html>
        `;

        const blob = new Blob([htmlContent], { type: "text/html" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${formData.name}.html`;
        link.click();

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to generate file:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Email Signature Generator
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Create a professional email signature in minutes. Choose from multiple styles and customize it to match your brand.
          </p>
        </div>
      </div>
<Features />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Your Information
            </h2>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-700 capitalize mb-1"
                  >
                    {key.replace("_", " ")}
                  </label>
                  {key === "image" ? (
                    <div className="relative">
                      <input
                        id={key}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={uploading}
                      />
                      <label
                        htmlFor={key}
                        className={`flex items-center justify-center w-full px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer
                          ${uploading 
                            ? 'bg-gray-50 border-gray-300' 
                            : 'hover:bg-gray-50 border-gray-300 hover:border-purple-500'
                          }`}
                      >
                        {uploading ? (
                          <div className="flex items-center space-x-2">
                            <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                            <span className="text-gray-500">Uploading...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Upload className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-500">Upload Image</span>
                          </div>
                        )}
                      </label>
                      {formData.image && (
                        <div className="mt-2">
                          <img
                            src={formData.image || "/placeholder.svg"}
                            alt="Preview"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <input
                      id={key}
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Choose Style
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Array.from({ length: 13 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSignature(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSignature === index
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-200 hover:border-purple-300 text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    Style {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Preview
                </h2>
                <button
                  onClick={downloadHtmlFile}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-all"
                >
                  {copied ? <Check size={20} /> : <Download size={20} />}
                  {copied ? "Downloaded!" : "Download HTML"}
                </button>
              </div>
              <div className="signature-preview rounded-lg">
                {signatures[selectedSignature]({ ...formData })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
