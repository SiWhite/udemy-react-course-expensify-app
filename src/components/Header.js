import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
        </ul>
    </header>
);

export default Header;
