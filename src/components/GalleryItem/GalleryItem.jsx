import './GalleryItem.css';

function GalleryItem( {path, description, likes}) {
    return (
        <>
        <img src={path}/>
        <div>{description}</div>
        <div>This picture has {likes} likes.</div>
        </>
    );
}

export default GalleryItem;