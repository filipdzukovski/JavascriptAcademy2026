import React,{useContext} from 'react';
import { Popup } from './Popup';
import {GalleryContext} from './../utils/GalleryContext';

export const Gallery = ({ 
    listOfPhotos, 
    // setImage, 
    // selektiranaSlika,
    // zatvoriSlika 
}) => {
    // console.log(selektiranaSlika)

    const {selectedImage,setSelectedImage} = useContext(GalleryContext);
    return (
        <div id='gallery'>
            {listOfPhotos.slice(0, 50).map(photo => {
                return (
                    <div
                        className='image-holder'
                        key={photo.id}
                        onClick={() => { setSelectedImage(photo) }}
                    >
                        <img
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                        />
                    </div>
                )
            })}
            {selectedImage &&
                <Popup 
                // izbranaSlika={selektiranaSlika} zatvoriSlika={zatvoriSlika}
                />}
        </div>
    )
}