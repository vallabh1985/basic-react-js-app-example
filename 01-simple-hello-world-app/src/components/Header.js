import React from 'react';
import Nav from './Nav';

const Header = () => {
    return <div>
            <h1>Header using default export</h1>
            <Nav />
            </div>;
}

export const Header2 = () => {
return <div><h3>Secondary header calling without default export </h3></div>;
}

export default Header;