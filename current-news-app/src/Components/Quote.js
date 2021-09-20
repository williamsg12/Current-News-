
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Quote = () => {
    const [quotes,setQuote]=useState({})
useEffect(() => {

    axios('https://inspiration.goprogram.ai')
    .then(res=>setQuote(res))
    .catch((err)=>console.log(err))
    
}, [])

   console.log(quotes)

    return (
			<div>
				<h1>Quote of the day</h1>

				<h3>Author:{quotes.author}</h3>
                <p>{quotes.quote}</p>
			</div>
		);
};

export default Quote;