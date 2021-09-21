import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Fade} from 'react-reveal'

const RandomPictue = () => {
        const [picture,setPicture]=useState('')

        useEffect(() => {
           
           axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`)
            .then(res=> setPicture(res.data))
            .catch((err)=>console.log(err))

        }, [])

   


    return (
			<div>
                <Fade top >
				<h1>{picture.title}</h1>
				<img src={picture.url} alt='' />

				<h2>Author:{picture.copyright}</h2>
				<p>{picture.date}</p>
				<p>{picture.explanation}</p>
                </Fade>
            </div>
		);
};

export default RandomPictue;