import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal'

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios(
			`https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.REACT_APP_NEWS_KEY}`
		)
			.then((res) => setArticles(res.data.news))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<Container>
				{articles.map((items) => {
					return (
						<div>
                            <Fade right cascade>

							<div key={items.id}>
								<h1>x{items.title}</h1>
							</div>
							<div>
								<p>{items.description}</p>
							</div>
							<div>
								<a href={items.url}>Read More</a>
							</div>
							<div>
								<img src={items.image} alt='' />
							</div>
							<div>
								<p>{items.author}</p>
								<p>{items.category}</p>
								<p>{items.published}</p>
							</div>
                            </Fade>
						</div>
					);
				})}
			</Container>
		</div>
	);
};

export default Articles;
