import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios.get('/gallery')
      .then( response => {
        setGalleryList(response.data);
      })
      .catch( error => {
        console.log('Error getting data:', error);
        alert('Sorry, could not get gallery data. Try again later.');
      })
  }

  useEffect (() => {
    getGallery();
  }, [])




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <GalleryList list={galleryList}/>
      </div>
    );
}

export default App;
