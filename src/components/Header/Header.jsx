import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo';
import './_Header.scss';

import {
    useAnimHomePage
} from '../../useAnimHomePage';
import { useLinksCreate } from '../../uselinksCreate';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';




export default function Header() {
    const InitialState = {
        visibility: false,
        transition: 'MoveTo',
        duration: 450,
        firstime: true,
    };
    const [LocalState] = useState(InitialState);
    const navMenu = useRef();

    
    // Creation de la navigation avec récupération des routes.
    const linkNavRoutes = useSelector(state => ({
        ...state.AllRoutesReducer.RoutesReducer.Nav
    }));
    const linksNav = useLinksCreate(linkNavRoutes)
    
    
    // retour à l'accueil et switch to projets to home.
    const location = useLocation(); // permet de recupérer l'url courant.
    const homeRef = useRef();
    const anchorRef = useRef();
    const history = useHistory();
    const [locationState, setLocation] = useState(location);

    const home = <button ref={homeRef} style={{cursor:'pointer'}} onClick={() => history.push('/')} className="link link__home">Accueil</button>
    const anchor = <a ref={anchorRef} className= "link" href= "#projet">Mes projets</a>

    // useAnimHomePage(LocalState, contentRef);
    

    useEffect(() => {setLocation(location)}, [location])

    useEffect(() => { if (locationState.pathname !== '/') homeRef.current.classList.add('animate') }, [locationState.pathname])

    return (
        <header>
            <Logo/>
            <nav ref= {navMenu} className="NavMenu">
                <ul>
                    <li>{locationState.pathname === '/'? anchor : home}</li>
                {linksNav}
                </ul>
            </nav>
        </header>
    )
}



