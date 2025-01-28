import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SocialMediaIcons from "./SocialMediaIcons"; 
import SvgToPngConverter from "./SvgtoPngConverter";
import ImageGallery from "./ImageGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/icons",
    element: <SocialMediaIcons />,
  },
  {
    path: "/svg-to-png",
    element: <SvgToPngConverter />,
  },
  {
    path: "/cld",
    element: <ImageGallery />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
