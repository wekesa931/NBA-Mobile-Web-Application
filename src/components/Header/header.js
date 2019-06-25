import React from 'react';
import FontAwesome from 'react-fontawesome';

import { Link } from 'react-router-dom';
import SideNavigation from '../SideNav/sideNav';

import './header.css';

const Header = (props) => {

    const logo = () =>(
        <Link to="/" className="logo">
            <img alt="nba logo" src="/images/nba_logo.png"/>
        </Link>
    )
     const navBars = ()=>(
         <div className="bars">
             <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
             />
         </div>
     )

    return ( 
        <header className='header'>
            <SideNavigation {...props}/>
            <div className='headerOpt'>
                {navBars()}
                {logo()}
            </div>
        </header>
     );
}
 
export default Header;