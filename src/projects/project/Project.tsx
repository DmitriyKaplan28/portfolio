import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}><button className={style.button}>Take a look</button></div>
            <div>
                <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;