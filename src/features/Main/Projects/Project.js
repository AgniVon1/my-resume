import React from 'react';
import s from "./projects.module.css"

export const Project = ({
                            style,
                            title,
                            text,
                            link,
                        }) => {
    return (
        <>
            <div className={s.projectImage} style={style}>
                <a href={link}>Go to project</a>
            </div>
            <div className={s.projectTitle}>
                <h3>{title}</h3>
            </div>
            <div className={s.projectDescription}>
                {text}
            </div>
        </>
    );
};

