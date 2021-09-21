import React from 'react';
import { Nav, NavLink, NavDropdown, Navbar } from 'react-bootstrap';

function NavBars() {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<NavLink href='/'>
					<h2>Home</h2>
				</NavLink>
				<Navbar.Toggle />

				<Navbar.Collapse title='Dropdown'>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />

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
						<NavLink href='/stock'>
							<h2>Stock</h2>
						</NavLink>
						<NavLink href='/quote'>
							<h2>Quote</h2>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavBars;
