import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    let [images, setImages] = useState([]);

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

    const likeImage = (id) => {
      axios.put(`/gallery/like/${id}`)
      .then(response => {
        getImages()
      })
      .catch(err => {
        alert('error liking the image')
        console.log('error with likes', err)
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {images.map(image => (
          <div className="image" key={image.id}>
            <img src={image.path}/>
        <p><button onClick={likeImage}>👍</button> Likes: {image.likes}</p>
        </div>
        ))}
        
      </div>
    );
}

export default App;
