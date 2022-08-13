import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from "./../assets/images/social-network.svg"
import todolistImage from "./../assets/images/todolist.svg"

export const Projects = () => {

    const socialNetworkStyle = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolistStyle = {
        backgroundImage: `url(${todolistImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}
                             style={socialNetworkStyle}/>
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}
                             style={todolistStyle}/>
                </div>
            </div>
        </div>
    );
};

