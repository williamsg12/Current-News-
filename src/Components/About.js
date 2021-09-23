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

				<p>
                <Bounce right cascade>
					This is my project to showcase News and to provide some level of entertainment.The Daily picture button is to provide you with a picture that day related to astronomy . The quote button is here for you to get a random quote upon every refresh.The Articles button is for you to view the lastest news of this minute. The background is interactive in most areas thus why I  left a semi open home screen for interacting with the background.
                </Bounce>
				</p>
			</Container>
		</div>
	);
};

export default About;
