import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Gallery } from './components/Gallery';
import { Navigation } from './components/Navigation';
import "./css/App.css";
import { GalleryContext } from './utils/GalleryContext';

export function App() {

  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(result => setPhotos(result.data))
      .catch(err => alert(err.message))
  }, [])

  // function openPhoto(url) {
  //   setPhotoUrl(url)
  // }
  // function closePhoto() {
  //   setPhotoUrl('');
  // }
  return (
    <div id='app'>
      <Navigation />

      <h2>App</h2>
      <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
        <Routes>
          <Route path='/gallery'
            element={
              <Gallery
                listOfPhotos={photos}
                // setImage={openPhoto}
                // selektiranaSlika={photoUrl}
                // zatvoriSlika={closePhoto}
              />} />
        </Routes>
      </GalleryContext.Provider>
    </div>
  )
}