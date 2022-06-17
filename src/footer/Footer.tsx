import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.text}>Dmitriy Kaplan</h2>
                <div className={style.container}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.text}>2022 ©</div>
            </div>
        </div>
    );
};
