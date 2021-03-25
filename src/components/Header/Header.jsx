import React, { useRef, useState } from 'react'
import Logo from '../Logo/Logo';
import './_Header.scss';

import {
    useAnimHomePage
} from '../../useAnimHomePage';

export default function Header() {
    const InitialState = {
        visibility: false,
        transition: 'MoveTo',
        duration: 450,
        firstime: true,
    }

    
    const [LocalState] = useState(InitialState)
    const contentRef = useRef();

    // useAnimHomePage(LocalState, contentRef);

    return (
        <header>
            <Logo/>
            <div ref = {contentRef} className="name">
                <h1>Sebastien Lamoureix</h1>
                <hr></hr>
                <span>
                <strong>Designer Graphique</strong>
                <br></br>
                &&
                <br></br>
                <strong> Développeur Front-End</strong>
                </span>
            </div>

            

        </header>
    )
}
