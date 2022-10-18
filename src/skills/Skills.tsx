import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import jsImage from "../assets/images/js.svg";
import cssImage from "../assets/images/css.svg";
import reactImage from "../assets/images/react.svg";

export const Skills = () => {

    const jsStyle = {
        backgroundImage: `url(${jsImage})`,
    };

    const cssStyle = {
        backgroundImage: `url(${cssImage})`,
    };

    const reactStyle = {
        backgroundImage: `url(${reactImage})`,
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}
                           style={jsStyle}/>
                    <Skill title={'CSS'} description={'Lorem ipsum'} style={cssStyle}/>
                    <Skill title={'React'} description={'Lorem ipsum'} style={reactStyle}/>
                </div>
            </div>
        </div>
    );
};

