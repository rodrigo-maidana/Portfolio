// src/components/ProjectList.jsx
import React from 'react';
import Project from './Project';
import projects from '../projects';

const ProjectList = () => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default ProjectList;
