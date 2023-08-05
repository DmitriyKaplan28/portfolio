import React from 'react';
import s from './Project.module.scss';

type styleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    title: string
    description: string
    style: styleType
}

const Project = ({title, description, style}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={style}>
                <button className={s.button}>Take a look</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
};

export default Project;