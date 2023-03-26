import React from 'react';
import Skill from "./Skill";
import s from "./skills.module.css"

export const SkillList = ({skills}) => {

    return (
        <>
            {
                skills.map((skill) => (

                        <div key={skill.id} className={s.skillContainer}>
                            <Skill icon={skill.icon} title={skill.title} text={skill.text}/>
                        </div>

                    )
                )
            }
        </>
    );
};

