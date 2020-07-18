import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Header.style.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>shop</Link>
                <Link className='option' to='/shop'>contact</Link>
            </div>


        </div>
    );
}

export default Header;