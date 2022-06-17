import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.formContainer}>
                    <input type="text" className={style.formElement}/>
                    <input type="text" className={style.formElement}/>
                    <textarea className={style.formElement}></textarea>
                </form>
                <div className={style.buttonContainer}><button>Send</button></div>
            </div>

        </div>
    );
};

