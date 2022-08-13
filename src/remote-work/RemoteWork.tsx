import React from 'react';
import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";


export const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title title={'I am looking for remote work options'}/>
                <div className={style.buttonContainer}>
                    <button>Hire me</button>
                </div>
            </div>

        </div>
    );
};

