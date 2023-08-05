import React from 'react';
import s from './Skill.module.scss';

type StyleType = {
    backgroundImage: string
}

type SkillPropsType = {
    title: string
    description: string
    style: StyleType
}

const Skill = ({title, style, description}: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={style}></div>
            <h3 className={s.h3}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Skill;