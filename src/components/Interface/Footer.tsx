import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:justify-between md:py-12">
     
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-2xl bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-transparent">
          ES Generator
          </h2>
          <p className="text-sm text-gray-600">
            Professional email signatures made easy.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/svg-to-png"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  SVG to PNG
                </Link>
              </li>
              <li>
                <Link
                  to="/html-to-png"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  HTML to PNG
                </Link>
              </li>
              <li>
                <Link
                  to="/signature-generator"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  Email Signature Generator
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800">Help</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="#how-it-works"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 transition-colors hover:text-violet-600"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ES Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
