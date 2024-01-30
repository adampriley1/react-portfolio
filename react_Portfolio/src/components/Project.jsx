import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import teamGenerator from "../assets/img/teamGenerator.png";


function Project(props) {
    // Body
    return <div>
        <h2>Project Title: {props.title}</h2>
        <p>Project Description: {props.description}</p>
        <div> {props.image}</div>
        <p> Gitbub Link: {props.github}</p>
        <p> Application Link: {props.link}</p>
        <Link to= "projects-gallery/{props.id}" role="button" className="btn btn-link">
                More Detail
            </Link>
    </div>
}

export default Project;