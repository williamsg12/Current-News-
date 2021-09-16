import React, { useEffect } from 'react';
import { useState } from 'react';

const RandomPictue = () => {
        const [picture,setPicture]=useState('')

        useEffect(() => {
           
           let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`;
            fetch(url)
            .then(res=>res.json())
            .then(res=> setPicture(res))
            .catch((err)=>console.log(err))

        }, [])

    console.log(picture)


    return (
			<div>
				<h1>{picture.title}</h1>
				<img src={picture.url} alt='' />

				<h2>Author:{picture.copyright}</h2>
				<p>{picture.date}</p>
				<p>{picture.explanation}</p>
			</div>
		);
};

export default RandomPictue;