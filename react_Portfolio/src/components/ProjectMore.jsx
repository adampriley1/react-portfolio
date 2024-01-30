import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom';


function ProjectMore(props) {
    let {id} = useParams()

    let currentProject = projects[id-1]
    console.log (currentProject);
   
    return <div>
    
        <h2>Project Title: {currentProject.title}</h2>
        <p>Project Description: {currentProject.description}</p>
        <div> {currentProject.image}</div>
        <p> Gitbub Link: {currentProject.github}</p>
        <p> Application Link: {currentProject.link}</p>
    </div>
}

export default ProjectMore;