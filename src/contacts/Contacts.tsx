import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.formContainer}>
                    <input type="text" className={style.formElement}
                           placeholder={'Please, enter your name and organization'}/>
                    <input type="text" className={style.formElement}
                           placeholder={'How can i contact you?'}/>
                    <textarea className={style.formElement}
                              placeholder={'Please, give me short description on your proposal or a link'}></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
};

