import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import SocialMediaIcons from "./SocialMediaIcons";
import SvgToPngConverter from "./SvgtoPngConverter";
import ImageGallery from "./ImageGallery";
import HtmlToPngConverter from "./HtmlToPngConverter";
import Navbar from "./components/Interface/NavBar";
import Home from "./Home";
import Footer from "./components/Interface/Footer";
import Loader from "./components/Interface/Loader"; // Import your loader component

function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0,0)
    const timer = setTimeout(() => {
      setLoading(false);

    }, 500); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
      {loading && <Loader />} 
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signature-generator" element={<App />} />
          <Route path="/icons" element={<SocialMediaIcons />} />
          <Route path="/svg-to-png" element={<SvgToPngConverter />} />
          <Route path="/html-to-png" element={<HtmlToPngConverter />} />
          <Route path="/cld" element={<ImageGallery />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
