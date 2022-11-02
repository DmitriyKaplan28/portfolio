import React from 'react';
import style from './Project.module.scss';

type styleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    title: string
    description: string
    style: styleType
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                <button className={style.button}>Take a look</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;