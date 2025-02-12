import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SocialMediaIcons from "./SocialMediaIcons";
import SvgToPngConverter from "./SvgtoPngConverter";
import ImageGallery from "./ImageGallery";
import HtmlToPngConverter from "./HtmlToPngConverter";
import Navbar from "./components/Interface/NavBar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/icons" element={<SocialMediaIcons />} />
        <Route path="/svg-to-png" element={<SvgToPngConverter />} />
        <Route path="/html-to-png" element={<HtmlToPngConverter />} />
        <Route path="/cld" element={<ImageGallery />} />
      </Routes>
    </BrowserRouter>
  );
}
