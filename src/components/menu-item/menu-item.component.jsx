import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.css'

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
    console.log(title)
    return (
        <div className={`${size} menu-item`} onClick={_ => { history.push(`${match.url}${linkUrl}`) }}>
            <div className='backgroundImage' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >
    );
}

export default withRouter(MenuItem);