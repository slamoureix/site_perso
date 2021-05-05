import React, { useRef, useState } from 'react'
import Logo from '../Logo/Logo';
import './_Header.scss';

import {
    useAnimHomePage
} from '../../useAnimHomePage';
import { useLinksCreate } from '../../uselinksCreate';
import { useSelector } from 'react-redux';

export default function Header() {
    const InitialState = {
        visibility: false,
        transition: 'MoveTo',
        duration: 450,
        firstime: true,
    }

    const LinkNav = useSelector(state => ({
        ...state.AllRoutesReducer.RoutesReducer.Nav
    }));

    const [LocalState] = useState(InitialState)
    const navMenu = useRef();
    const linksNav = useLinksCreate(LinkNav);

    // useAnimHomePage(LocalState, contentRef);

    return (
        <header>
            <Logo/>
            <nav ref= {navMenu} className="NavMenu">
            <ul>{linksNav}</ul>
            </nav>
        </header>
    )
}
