import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetings}>
                    <span>Hi there</span>
                    <h1>I am Dmitriy Kaplan</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

