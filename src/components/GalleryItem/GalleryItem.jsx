import { useState , useEffect } from 'react';
import axios from 'axios';
// importing the required items for the component to function

// creating a function that will make Items from the props passed to it from GalleryList
function GalleryItem (props) {

    // creating a conditional to render the description/image
    const [viewPoint, setViewPoint] = useState(true)  
    
    // setting the props passed along equal to variables for use within the component
    let getImages = props.getImages
    let image = props.image

    // creating a function to handle the ability to like an image on the DoM/ update the like counter
    const likeImage = () => {
        let id = image.id
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

    // creating image items to be sent back and be rendered to the DoM using the props passed form GalleryList
    return (
        <div className="image" key={image.id}>
                <div onClick={() => setViewPoint(!viewPoint)}>{viewPoint ? <img src={image.path}/> : <p>{image.description}</p>}</div>
                <div><button onClick={likeImage}>👍</button> Likes: {image.likes}</div>
            </div>
    )
}

// exporting the created items back to the GalleryList
export default GalleryItem