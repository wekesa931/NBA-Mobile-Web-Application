import React from 'react'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './sidenav.css'

const SideNavItems = () => {
    const items = [
        {
            type: 'options',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'options',
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: 'options',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'options',
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'options',
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]
    const showitems = ()=> (
        items.map((item, i)=>(
            <div className={item.type} key={i}>
                <Link to={item.link}>
                    <FontAwesome name={item.icon}/>
                    {item.text}
                </Link>
            </div>
        ))
    )
    return ( 
        <div>
            {showitems()}
        </div>
     );
}
 
export default SideNavItems;