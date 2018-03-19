import React from 'react';

const NavigationBar = () => {
    return(
    <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#5D6D7E'}}>
            <a href="#" class="brand-logo" style={{fontSize: '1.6em'}}>Yummy Recipes</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Password Reset</a></li>
            </ul>
        </div>
    </nav>
    )}
export default NavigationBar;