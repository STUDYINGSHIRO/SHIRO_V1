import React from 'react';
import { GALLERY } from '../data';

export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="card-container">
                {GALLERY.map((image, index) => (
                    <div className="card" key={index}>
                        <img className="card-image" src={image.img} alt={image.alt} />
                        <div className="card-content">
                            <h3 className="card-title">{image.alt}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
