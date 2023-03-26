import React from 'react';
import s from "./greeting.module.css"
import sc from "../../../assest/style/container.module.css";

export const Greeting = () => (
    <div className={s.greetingBlock}>
        <div className={sc.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Ilia </h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.icon}>

            </div>
        </div>
    </div>
);


