import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800"
        >
          ES Generator
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-sm font-medium">
          <button
            onClick={() => handleScrollToSection("features")}
            className="transition-colors hover:text-violet-600"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("how-it-works")}
            className="transition-colors hover:text-violet-600"
          >
            How It Works
          </button>
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/signature-generator">
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition">
              Create Signature
            </button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-4 text-lg font-medium">
            <button
              onClick={() => {
                handleScrollToSection("features");
                setIsOpen(false);
              }}
              className="hover:text-violet-600 text-left"
            >
              Features
            </button>
            <button
              onClick={() => {
                handleScrollToSection("how-it-works");
                setIsOpen(false);
              }}
              className="hover:text-violet-600 text-left"
            >
              How It Works
            </button>
            <Link to="/signature-generator">
              <button
                className="mt-4 w-full px-4 py-2 bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Create Signature
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
