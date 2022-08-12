import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'project'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}/>
                    <Project title={'project'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quas.'}/>
                </div>
            </div>
        </div>
    );
};

