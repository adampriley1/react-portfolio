import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import projects from '../data/projects.json';


function ProjectMore(props) {
    // Body
    return <div>
        <h2>Project Title: {props.title}</h2>
        <p>Project Description: {props.description}</p>
        <div> {props.image}</div>
        <p> Gitbub Link: {props.github}</p>
        <p> Application Link: {props.link}</p>
    </div>
}

export default ProjectMore;