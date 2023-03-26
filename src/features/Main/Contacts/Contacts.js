import React from 'react';
import sc from "../../../assest/style/container.module.css";
import s from "./contacts.module.css";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <Fade>
            <div className={`${sc.container} ${s.contactBlock}`}>
                <div className={s.contactInfo}>
                    <div className={s.contactInfoTitle}>
                        <h2>Info</h2>
                    </div>
                    <div className={s.contactInfoText}>
                        <p>
                            For any questions you can contact with me with any way below
                        </p>
                    </div>
                    <div className={s.contactInfoPhone}>
                        <div>Phone number:</div>
                        <div>
                            <a href="tel:+80257138189">
                                +8 (0257) 13-81-89
                            </a>
                        </div>
                    </div>
                    <div className={s.contactInfoEmail}>
                        <div>E-mail:</div>
                        <div>
                            <a href="mailto:iliatron00@gmail.com">
                                iliatron00@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className={s.contactInfoGit}>
                        <div>GitHub:</div>
                        <div>
                            <a href="https://github.com/AgniVon1">
                                github.com/AgniVon1
                            </a>
                        </div>
                    </div>
                </div>
                    <form className={s.contactForm} id="contacts">
                        <div className={s.contactFormTitle}>
                            <h2>Contact Me</h2>
                        </div>
                        <div className={s.contactFormInput}>
                            <div>Your name:</div>
                            <input type="text" name="name" placeholder="Name"/>
                        </div>
                        <div className={s.contactFormInput}>
                            <div>Your e-mail:</div>
                            <input type="text" name="email" placeholder="E-Mail"/>
                        </div>
                        <div className={s.contactFormTextarea}>
                            <div>Your message:</div>
                            <textarea name="message" placeholder="Enter your message"></textarea>
                        </div>
                        <div className={s.contactFormSendButton}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
            </div>
        </Fade>


    );
};

