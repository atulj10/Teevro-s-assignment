import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ title, year, poster, actors = null, awards = null, suited = null, plot = null, country = null, rating = null }) => {
    const [visible = null, setVisible] = useState(false);

    const handleCardClick = () => {
        setVisible(!visible);
    };

    return (
        <div onClick={handleCardClick} onMouseLeave={handleCardClick} className='card flex flex-col justify-center p-5 items-center border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500'>
            <div className='h-[300px] flex items-center justify-center overflow-hidden'>
                <img className='image h-full object-fill' src={poster} alt="movie-poster-alt" />
            </div>
            <h1 className='text-xl break-word font-light mt-2'>{title}</h1>
            {visible && (
                <div className='z-10 text-center text-black'>
                    {actors && <h2><b>Actors:</b> {actors}</h2>}
                    {awards && <h2><b>Awards:</b> {awards}</h2>}
                    {plot && <h2><b>Plot:</b> {plot}</h2>}
                    {rating && <h2><b>Rating:</b> {rating}</h2>}
                    {suited && <h2><b>Suited:</b> {suited}</h2>}
                </div>
            )}
            <p className='text-gray-500 font-normal'>{year}</p>
        </div>
    );
};

export default MovieCard;
