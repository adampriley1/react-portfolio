import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


function Project(props) {
    // Body
    return <div className="pb-5">
        <h2>{props.title}</h2>
        <p> {props.description}</p>
        <Link to={`/projects-gallery/${props.id}`} role="button" className="btn-link button-style">
                More Detail
            </Link>
            <hr class="solid"></hr>
    </div>
}

export default Project; 
