import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list.component";
import SearchForm from "./components/search-form.component";

const App = () => {
  const [GalleryData, setGalleryData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo`
    ).then((req) =>
      req.json().then((result) => {
        setGalleryData(result.hits);
      })
    );
  }, [searchText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(event.target.search.value);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-6xl font-semibold	text-center	 text-gray-600 mb-14">
        Photo Gallery
      </h1>
      <SearchForm submitHandler={handleSubmit} />
      {GalleryData.length ? (
        <CardList photoGallery={GalleryData} />
      ) : (
        <h2 className="text-4xl font-semibold	text-center	 text-gray-600 mt-28">
          No Images Found
        </h2>
      )}
    </div>
  );
};

export default App;
