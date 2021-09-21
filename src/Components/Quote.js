
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Fade} from 'react-reveal'

const Quote = () => {
    const [quotes,setQuote]=useState({})
useEffect(() => {

    axios(`https://favqs.com/api/qotd`)
    .then(res=>setQuote(res.data.quote))
    .catch((err)=>console.log(err))
    
}, [])

    return (
			<div>
                <Fade left casccade >
				<h1>Quote of the day</h1>

				<h3>{quotes.author}</h3>
                <p>{quotes.body}</p>
                </Fade>
			</div>
		);
};

export default Quote;