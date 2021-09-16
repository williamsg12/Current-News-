import React, { useEffect } from 'react';
import { useState } from 'react';

const RandomPictue = () => {
        const [picture,setPicture]=useState('')

        // useEffect(() => {
            let key=process.env.REACT_APP_NASA_API_KEY
        //    let url = `https://api.nasa.gov/planetary/apod?api_key=$`;
        //     fetch(url)
        //     .then(res=>res.json())
        //     .then(res=> setPicture(res))
        //     .catch((err)=>console.log(err))

        // }, [])

    console.log(key)


    return (
        <div>
            
        </div>
    );
};

export default RandomPictue;