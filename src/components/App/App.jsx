import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';
// importing all the required items for the App to function

// creating a function to run the App
function App() {

  // creating an array to store the images
    const [images, setImages] = useState([]);

    // making the array load when the page loads
    useEffect(() => {
      getImages()
  }, [])

  // creating a function to get the images from the server
    const getImages = () => {
      axios.get('/gallery')
        .then(response => {
          setImages(response.data)
        })
        .catch(err => {
          alert('error getting images');
          console.log(err);
        })
    }

    // rendering the images to the DoM using components
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList images={images} getImages={getImages}/>
        
      </div>
    );
}

export default App;
