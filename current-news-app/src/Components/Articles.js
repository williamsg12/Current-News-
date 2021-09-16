import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Articles = () => {
    const [articles,setArticles]=useState({})
    
    useEffect(() => {
        let url = `https:api.currentsapi.services/v1/latest-news?` +
    `language=en&` +
    `apiKey=${process.env.REACT_APP_NEWS_KEY}`;

    fetch(url)
			.then((res) => res.json())
			.then((res) => console.log(res.json))
			.catch((err) => console.log(err));
   
        
    }, [])
    //  console.log(res);
    return (
        <div>
            
        </div>
    );
};

export default Articles;