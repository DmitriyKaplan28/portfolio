import React from 'react';
import style from './Skill.module.scss';

type styleType = {
    backgroundImage: string
}

type SkillPropsType = {
    title: string
    description: string
    style: styleType
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3 className={style.h3}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Skill;