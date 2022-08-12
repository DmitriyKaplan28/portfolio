import React from 'react';
import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css';


export const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>I am looking for remote work options</h2>
                <div className={style.buttonContainer}>
                    <button>Hire me</button>
                </div>
            </div>

        </div>
    );
};

