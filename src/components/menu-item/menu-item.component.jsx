import React from "react";
import { useHistory, useLocation } from "react-router";
// import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";

import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const location = useLocation();
    // console.log(`${match.url}${linkUrl}`)
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${location.pathname}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    linkUrl: PropTypes.string.isRequired,
};

export default MenuItem;
