import React from 'react';
import logo from './GloboLogo.png'

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            Bringing new Homes right to your door
        </div>
        </header>
);

export default Header;

