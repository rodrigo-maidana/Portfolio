// src/components/Project.jsx
import React from 'react';

const Project = ({ title, description, link, repo }) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
    );
};

export default Project;
