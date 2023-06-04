import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

function App() {

    const [images, setImages] = useState([]);

    useEffect(() => {
      getImages()
  }, [])

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
