import React from 'react';
import s from "./navMenu.module.css"
export const NavMenu = () => {
    return (
        <div className={s.nav}>
            <a href={""}>Главное</a>
            <a href={""}>Скиллы</a>
            <a href={""}>Проекты</a>
            <a href={""}>Контакты</a>
        </div>
    );
};
