import React from 'react';
import s from "./header.module.css"
import {NavMenu} from "./NavMenu/NavMenu";

export const Header = () => (
            <div className={s.header}>
                <div className={s.headerContainer}>
                    <NavMenu />
                </div>
            </div>
    );

