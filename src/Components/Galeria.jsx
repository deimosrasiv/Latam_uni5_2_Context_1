import React, { useState } from 'react';
import Data from '../fotos.json';
import Heart from "./IconHeart";
import "../assets/css/galeria.css";

const Photos = () => {
  const [jsonData, setJsondata] = useState(Data.photos);
  

  const handleLikeClick = (index) => {
    setJsondata((prevData) => {
      const updatedPhotos = [...prevData];
      updatedPhotos[index].liked = !updatedPhotos[index].liked;
      return  updatedPhotos ;
    });
  };


  
  return (
    <>
      <div className="galeria">
        {jsonData.map((element, index) => (
          <article key={element.id}>
            <button className='buttonImagen' type='button' >

            <img
              className='imglist'
              src={element.src.landscape}
                alt={element.alt}
                onClick={() => handleLikeClick(index)}
              />
              </button>
            
           <Heart filled={element.liked} className="absolute"/>
          </article>
        ))}
      </div>
    </>
  );
}

export default Photos;
