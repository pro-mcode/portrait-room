import "./App.css";
// import { Routes, Route } from "react-router";
import About from "./components/about";
import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import GalleryPage from "./pages/gallery-page";
import HomePage from "./pages/home-page";
import "./scss/style.scss";

function App() {
  return (
    <div className="max-w-[1700px] mx-auto">
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes> */}
      <GalleryPage />
      {/* <BlogPage /> */}
    </div>
  );
}

export default App;
