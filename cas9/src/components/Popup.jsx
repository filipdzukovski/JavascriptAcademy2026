import React,{useContext} from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = (
    // {izbranaSlika,zatvoriSlika}
) => {

    const {selectedImage,setSelectedImage} = useContext(GalleryContext)

    return(
        <div id='popup'>
            <button onClick={()=>{setSelectedImage(null)}} className='close-popup'>
                &times;
            </button>
            <div>
                <img src={selectedImage.url} alt={selectedImage.title}/>
            </div>
        </div>
    )
}