import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ImageDetails } from "./components/ImageDetails";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { Home } from "./components/Home";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const searchRef = useRef();

  return (
    <>
      <Header searchRef={searchRef} setSearchKey={setSearchKey} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search searchKey={searchKey} />} />
        <Route
          path="/images/:id"
          element={
            <ImageDetails searchRef={searchRef} setSearchKey={setSearchKey} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
