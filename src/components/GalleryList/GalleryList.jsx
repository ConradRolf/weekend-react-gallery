import GalleryItem from '../GalleryItem/GalleryItem'
// importing the galleryitem for rendering

// creating a function to make GalleryItems to render using the props passed from the App
function GalleryList(props) {

    // setting the imported props equal to variables for use within the component
    let getImages = props.getImages
    let images = props.images

    // things that will be rendered to the DoM/passed back up to the App
    // also passing along props to the GalleryItem component to create each individual image after looping 
    // through the array of image objects
    return(
        <div key={images.id}>
        {props.images.map(image => (
            <GalleryItem image={image} getImages={getImages}/>
        ))}
        </div>
    )
}

// exporting the GalleryList back to the App
export default GalleryList