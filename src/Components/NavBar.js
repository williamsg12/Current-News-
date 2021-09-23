import React from 'react';
import { Nav, NavLink,Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavBars() {
	return (
		<div>
			<Navbar bg='dark' variant='dark' navbar-expand='lg'>
				<NavLink href='/'>
					<h2>Home</h2>
				</NavLink>

				<NavbarCollapse>
					<Nav>
						<NavLink href='/about'>
							<h2>About</h2>
						</NavLink>
						<NavLink href='/picture'>
							<h2>Daily picture</h2>
						</NavLink>
						<NavLink href='/articles'>
							<h2>Articles</h2>
						</NavLink>
						<NavLink href='/quote'>
							<h2>Quote</h2>
						</NavLink>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		</div>
	);
}

export default NavBars;
