import React from 'react';

const Header = (props) => {

    return(
        <custom-header>
            <div slot="logo">{props.logo}</div>
            <div slot="navigation">{props.navigation}</div>
        </custom-header>
    );
}

export default Header;