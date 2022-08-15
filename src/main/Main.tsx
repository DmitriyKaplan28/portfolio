import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhotoImage from "../assets/images/my-photo.png";

export const Main = () => {

    const myPhotoStyle = {
        backgroundImage: `url(${myPhotoImage})`,
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetings}>
                    <span className={style.text}>Hi there</span>
                    <h1 className={style.h1}>I am Dmitriy Kaplan</h1>
                    <p className={style.text}>Front-end developer</p>
                </div>
                <div className={style.photo} style={myPhotoStyle}></div>
            </div>
        </div>
    );
};

