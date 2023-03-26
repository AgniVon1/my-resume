import React from 'react';
import s from "./projects.module.css";
import {Project} from "./Project";

export const ProjectList = ({projects}) => {
    return (
                projects.map((project) => (
                        <div key={project.id} className={s.projectItemContainer}>
                            <Project style = {project.style}
                            title = {project.title}
                            text = {project.text}
                            link = {project.link}/>
                        </div>
                    )
                )
    );
};
