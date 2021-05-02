import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {
    console.log('Props are', props);
    let array =  props.list;
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