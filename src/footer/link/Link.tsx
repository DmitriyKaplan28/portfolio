import React from 'react';
import s from './Link.module.scss';

type StyleType = {
    backgroundImage: string
}

type LinkPropsType = {
    style: StyleType
}

export const Link = ({style}: LinkPropsType) => {
    return (
        <div className={s.icon} style={style}></div>
    );
};
