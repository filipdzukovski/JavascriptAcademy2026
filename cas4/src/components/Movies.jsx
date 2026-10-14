import React from 'react';

export const Movies = ({listaNaFilmovi}) => {
    console.log(listaNaFilmovi)
    return(
        <div id='movies'>
            {listaNaFilmovi.map((film,i)=>{
                return(
                    <div key={i}>
                        <h3>Title: {film.name}</h3>
                        <p>Release Date: {film.date}</p>
                        <p>Genre: {film.genre}</p>
                        <p>Plot: {film.plot}</p>
                        <a href={film.imdbLink} target="_blank">Go To IMDb</a>
                        <br/>
                        <img
                            src={film.imgUrl} 
                            alt={film.name} 
                            height={400}
                            width={300}
                            />
                        <hr/>
                    </div>

                )
            })}
        </div>
    )
}