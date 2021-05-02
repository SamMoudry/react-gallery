import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {
    return(
        <>
        { props.list.map(gallery => 
                (<GalleryItem key={gallery.id} 
                    path={gallery.path} 
                    description={gallery.description} 
                    likes={gallery.likes}/>)
            )}
        </>
    );
}

export default GalleryList;