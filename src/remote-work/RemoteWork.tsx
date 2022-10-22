import React from 'react';
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";


export const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title title={'I am looking for remote work options'}/>
                <div className={style.buttonContainer}>
                    <button className={style.button}>Hire me</button>
                </div>
            </div>

        </div>
    );
};

