import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Sidenav.css';

class Sidenav extends React.Component {

    render() {
        return (
            <div className="sidenav">
                <ul>
                    <li><NavLink to="/">Services</NavLink></li>
                    <li><NavLink to="/eventbrite">Eventbrite</NavLink></li>
                    <li><NavLink to="/facebook">Facebook</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Sidenav;