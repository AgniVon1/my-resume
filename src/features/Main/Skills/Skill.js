import React from 'react';
import {Fade} from "react-awesome-reveal";
import s from "./skills.module.css"
const Skill = ({icon,title,text}) => {
    return (
        <Fade>
            <div className={s.skillIcon}>
                <img src={icon} alt="skill_logo"/>
            </div>
            <div className={s.skillTitle}>
                <h3>{title}</h3>
            </div>
            <div className={s.skillText}>
                {text}
            </div>
        </Fade>
    );
};

export default Skill;