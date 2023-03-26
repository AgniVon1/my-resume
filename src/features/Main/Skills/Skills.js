import React, {useState} from 'react';
import ReactLogo from "../../../assest/icons/react_gold.svg"
import {SkillList} from "./SkillList";
import s from "./skills.module.css"
import sc from "../../../assest/style/container.module.css"

export const Skills = () => {
    const [skills, setSkills] = useState([
        {
            id: 0, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
        },
        {
            id: 1, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +

                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
        },
        {
            id: 2, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
        }, {
            id: 3, icon: ReactLogo, title: 'React',
            text: "Lorem "
        },
        {
            id: 4, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "

        },
        {
            id: 5, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " +
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
        },
        {
            id: 6, icon: ReactLogo, title: 'React',
            text: "Lorem ipsum "
        },
    ])

    return (
        <div className={s.skillsBlock}>
            <div className={sc.container}>
                <h2>Skills</h2>
                <div className={s.skillListContainer}>
                    <SkillList skills={skills}/>
                </div>
            </div>
        </div>
    );

}

