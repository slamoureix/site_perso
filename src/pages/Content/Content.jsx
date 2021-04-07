import React, { useRef, useState } from 'react';

import './_Content.scss';
import { useSelector } from 'react-redux';
import { useAnimHomePage } from '../../useAnimHomePage';
import { useLinksCreate } from '../../uselinksCreate';

export default function Content() {
    const Projects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));
    const content = useRef()
    
    const InitialState = {
        visibility: false,
        transition: 'MoveTo',
        duration: 550,
        firstime: true,
        statutElem: 'Hidden'
    }
    const [LocalState] = useState(InitialState);

    // useAnimHomePage(LocalState, content);
    const Links = useLinksCreate(Projects);

    return (
        <ul ref = {content} className = "project" >
            {Links}
            <li><p>D'autres projets viendrront completer</p></li>
        </ul>
    )
}

