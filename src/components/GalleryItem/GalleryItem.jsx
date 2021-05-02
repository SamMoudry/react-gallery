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
            return(<div onClick={this.toggleImage}>{this.description}</div>);
        }
    }
}

function GalleryItem( {id, path, description, likes}) {
    let display = {
        path: path,
        description: description,
    }
    return (
        <>
        <div><GalleryDisplay list={display} /></div>
        <div>This picture has {likes} likes.</div>
        <button>Like</button>
        </>
    );
}

export default GalleryItem;