import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {

    // const socialNetwork = {
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}/>
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}/>
                </div>
            </div>
        </div>
    );
};

