import { useState } from "react";
import "./App.css";
import ImagesSection from "./components/Images/ImagesSection";
import SearchBar from "./components/Search/SearchBar";

const DEFAULT_IMAGES = [
  {
    src: "https://roboticcat7000.github.io/RWebsite/Images/funten.jpeg",
    keyword: "cat funten grey",
  },
  {
    src: "https://roboticcat7000.github.io/RWebsite/Images/snowwhite.jpeg",
    keyword: "cat snowwhite",
  },
];

function App() {
  const [images, setImages] = useState(DEFAULT_IMAGES);

  const update = (i) => {
    if (i == 18) {
      setImages(DEFAULT_IMAGES);
      return;
    }
    setImages(i);
  };

  return (
    <div>
      <header>
        <h1>Snap Shot!</h1>
      </header>
      <SearchBar images={images} update={update} />
      <ImagesSection images={images} />
    </div>
  );
}

export default App;
