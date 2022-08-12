import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum'}/>
                    <Skill title={'React'} description={'Lorem ipsum'}/>
                </div>
            </div>
        </div>
    );
};

