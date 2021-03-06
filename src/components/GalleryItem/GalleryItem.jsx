import './GalleryItem.css';
import React, { Component } from 'react';

class GalleryDisplay extends Component {
    constructor(props) {
        super(props);
        this.path = props.list.path;
        this.description = props.list.description;
        this.state = {
            isImage: true,
        };
    }

    toggleImage = () => {
        this.setState(state => ({ isImage: !state.isImage }));
    }

    render() {
        if (this.state.isImage) {
            return(<img src={this.path} onClick={this.toggleImage}/>); 
        } else {
            return(
                <div className="container">
                    <p onClick={this.toggleImage} className="descriptionText">{this.description}</p>
                    <img src={this.path} onClick={this.toggleImage} className="descriptionImage"/>
                </div>
            );
        }
    }
}

function GalleryItem( {putGallery, id, path, description, likes}) {
    let display = {
        path: path,
        description: description,
    }
    return (
        <section className="picture">
            <div><GalleryDisplay list={display} /></div>
            <div>This picture has {likes} likes.</div>
            <button onClick={() => putGallery(id)}>Like</button>
        </section>
    );
}

export default GalleryItem;