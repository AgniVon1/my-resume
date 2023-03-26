import React from 'react';
import ReactLogo from "../../assest/icons/react_gold.svg"
import s from "./footer.module.css"
import sc from "../../assest/style/container.module.css"

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <div>
                    <h3>Tron Ilia</h3>
                </div>
                <div className={s.icons}>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={s.icon}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                </div>
                <div>
                    <span>Copyright, 2022</span>
                </div>
            </div>
        </div>
    );
};

