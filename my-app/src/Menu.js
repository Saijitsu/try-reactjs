import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <div id="brand-nav">
                    Wonderfuly
                </div>
                <ul id="menu-link">
                    <li><a href="./home">Home</a></li>
                    <li><a href="/home">Project</a></li>
                    <li><a href="/home">Team</a></li>
                    <li><a href="/home">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;