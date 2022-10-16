import React from 'react';
import style from './Link.module.scss';

type StyleType = {
    backgroundImage: string
}

type LinkPropsType = {
    style: StyleType
}

export const Link = (props: LinkPropsType) => {
    return (
        <div className={style.icon} style={props.style}></div>
    );
};
