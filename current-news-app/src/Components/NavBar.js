import React from 'react';
import {Nav,NavLink} from 'react-bootstrap';

function NavBars() {
    return (
        <div>
            <Nav>
                <NavLink to='/'>
                   <h1>logo</h1>
                </NavLink>
            </Nav>
        </div>
    );
}

export default NavBars;