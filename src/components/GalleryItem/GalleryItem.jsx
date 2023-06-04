import { useState , useEffect } from 'react';
import axios from 'axios';

function GalleryItem (props) {

    const [viewPoint, setViewPoint] = useState(true)   

    let image = props.image

    const likeImage = (id) => {
        axios.put(`/gallery/like/${id}`)
        .then(response => {
            getImages()
            console.log('you liked an image')
        })
        .catch(err => {
        alert('error liking the image')
        console.log('error with likes', err)
        })
    }

    return (
        <div className="image" key={image.id}>
                <div onClick={() => setViewPoint(!viewPoint)}>{viewPoint ? <img src={image.path}/> : <p>{image.description}</p>}</div>
                <p><button onClick={likeImage}>👍</button> Likes: {image.likes}</p>
            </div>
    )
}

export default GalleryItem