import React from 'react';
import {Nav,NavLink,NavDropdown, Navbar} from 'react-bootstrap';


function NavBars() {
    return (
			<div>
                <Navbar bg='dark'>

					<NavLink href='/'>
						<h2>Home</h2>
					</NavLink>
                <NavDropdown title="Dropdown">

				<Nav>
					<NavLink href='/about'>
						<h2>About</h2>
					</NavLink>
					<NavLink href='/daily-picture'>
						<h2>Daily picture</h2>
					</NavLink>
					<NavLink href='/categories'><h2>Categories</h2></NavLink>
                    <NavLink href='login'><h2>Sign In</h2></NavLink>
				</Nav>
                </NavDropdown>
                </Navbar>
			</div>
		);
}

export default NavBars;