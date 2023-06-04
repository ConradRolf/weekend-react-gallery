import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {

    let getImages = props.getImages
    let images = props.images

    return(
        <div key={images.id}>
        {props.images.map(image => (
            <GalleryItem image={image} getImages={getImages}/>
        ))}
        </div>
    )
}

export default GalleryList