import React from 'react';
import {Greeting} from "./Greeting/Greeting";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "../Footer/Footer";

export const Main = () => (
        <>
            <Greeting />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );


