import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


function Project(props) {
    // Body
    return <div>
        <h2>Project Title: {props.title}</h2>
        <p>Project Description: {props.description}</p>
        <Link to={`/projects-gallery/${props.id}`} role="button" className="btn btn-link">
                More Detail
            </Link>
    </div>
}

export default Project; 