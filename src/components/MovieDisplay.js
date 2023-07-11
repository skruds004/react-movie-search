import React, {useEffect, useState} from 'react'

export default function MovieDisplay({movie}) {
    const loaded = () => {
        return (
            <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
            </>
        );
    };

    //Function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>
    };

    return movie ? loaded() : loading();
}
