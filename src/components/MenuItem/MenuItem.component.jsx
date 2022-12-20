import React from 'react'

import {
    useLocation,
    useNavigate,
    useParams,
    useRouteMatch
} from "react-router-dom";

import './menuitem.styles.scss'


const MenuItem = ({size, imageUrl, title, linkUrl}) => {
    // let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    // console.log("menuitem withrouter: ", userId)
    return (
        <div className={`menu-item ${size}`} onClick={() => navigate(`${linkUrl}`)}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;