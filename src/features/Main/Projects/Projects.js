import React, {useState} from 'react';
import ReactLogo from "../../../assest/icons/react_gold.svg";
import s from "./projects.module.css"
import sc from "../../../assest/style/container.module.css"
import {ProjectList} from "./ProjectList";
import {Slide} from "react-awesome-reveal";

export const Projects = () => {
    const [projects, setProjects] = useState([
            {
                id: 0, style: {backgroundImage: `url(${ReactLogo})`}, title: 'ToDo',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean ma" +
                    "ssa., consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
                    "A, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. A ",
                link: 'Lorem ipsum dolor sit amet'
            },
            {
                id: 1, style: {backgroundImage: `url(${ReactLogo})`}, title: 'ToDo',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
                link: 'Lorem ipsum dolor sit amet'
            },
            {
                id: 2, style: {backgroundImage: `url(${ReactLogo})`}, title: 'ToDo',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
                link: 'Lorem ipsum dolor sit amet'
            },
        ]
    )


    return (
        <div className={s.projectBlock}>
                <div className={`${sc.container} ${s.projectContainer}`}>
                    <Slide direction={"left"}>
                    <h2>My Projects</h2>

                    <div className={s.projectListContainer}>
                        <ProjectList projects={projects}/>
                    </div>
                    </Slide>
                </div>
        </div>
    );
}


