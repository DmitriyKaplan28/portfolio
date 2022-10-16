import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import linkedinImage from "../assets/images/linkedin.svg";
import githubImage from "../assets/images/github.svg";
import codewarsImage from "../assets/images/codewars.svg";
import telegramImage from "../assets/images/telegram.svg";
import {Link} from "./link/Link";

const linkedinStyle = {
    backgroundImage: `url(${linkedinImage})`,
};
const githubStyle = {
    backgroundImage: `url(${githubImage})`,
};
const codewarsStyle = {
    backgroundImage: `url(${codewarsImage})`,
};
const telegramStyle = {
    backgroundImage: `url(${telegramImage})`,
};

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Dmitriy Kaplan'}/>
                <div className={style.container}>
                    <Link style={linkedinStyle}/>
                    <Link style={githubStyle}/>
                    <Link style={codewarsStyle}/>
                    <Link style={telegramStyle}/>
                </div>
                <div className={style.text}>2022 ©</div>
            </div>
        </div>
    );
};
