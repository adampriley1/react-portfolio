import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom';


function ProjectMore(props) {
    let {id} = useParams()
    let currentProject = projects[id-1]

   
    return (
    <div className='container text-center'>
    
        <h2 className='m-5'>Project Title: {currentProject.title}</h2>
        <p>Project Description: {currentProject.description}</p>
        <p><a href={currentProject.github} target='_blank' rel='noopener noreferrer'>Github Repo </a></p>
        <p> <a href={currentProject.link} target='_blank' rel='noopener noreferrer'>Deployed Site</a></p>
        <img src = {currentProject.image} /> 
    </div>
    );
};

export default ProjectMore;