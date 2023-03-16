import React, { useState } from 'react';
import Data from '../fotos.json';
import Heart from "./IconHeart";
import "../assets/css/galeria.css";

const PhotosFav = () => {
  const [jsonData, setJsondata] = useState(Data.photos);
  
  
  return (
    <>
      <div className="galeria">
        {jsonData.map(element => (
          
          
            <article key={element.id}>
            <button className='buttonImagen' type='button' >
              {element.liked && (
                
            <img
            className='imglist'
            src={element.src.landscape}
            alt={element.alt}
            />
            )}
            </button>
            
            <Heart filled={element.liked} className="absolute"/>
            </article>
           
        ))}
      </div>
    </>
  );
}

export default PhotosFav;
