import React from 'react';
import { Container } from 'react-bootstrap';
import {Bounce} from 'react-reveal';

const About = () => {
	return (
		<div>
			<Container>
				<Bounce>
					<h1>About</h1>
				</Bounce>
                <Bounce>

				<p>
					This is my project to showcase News and to provide some level of entertainment.The Daily picture button is to provide you with a picture that day related to astronomy . The categories  button will allow you to find specific articles related to your chosen category.
				</p>
                </Bounce>
			</Container>
		</div>
	);
};

export default About;
