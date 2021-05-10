import React, { useRef, useState, useEffect } from 'react';

import './_Content.scss';
import { useSelector } from 'react-redux';
import { useAnimHomePage } from '../../useAnimHomePage';
import { useLinksCreate } from '../../uselinksCreate';

export default function Content() {
    const Projects = useSelector(state => ({
        ...state.AllRoutesReducer.RoutesReducer.Projects
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
    // const Links = ;
    

    useEffect(() => {
        const ArrLinks = document.querySelectorAll('.link__project_box');
        const ulLink = document.querySelector('.project');

        ArrLinks.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                link.classList.add('link__project_box--hover')
                if (link.classList.contains('link__project_box--hover')) {
                ArrLinks.forEach(l => l.classList.add('blur'));
                link.classList.remove('blur');
            }
            
            })
            link.addEventListener('mouseleave', () => {
                link.classList.remove('link__project_box--hover');
            })
        })

        ulLink.addEventListener('mouseleave', () => {
            ArrLinks.forEach((link) => link.classList.remove('blur'))
        })
    }, [])

    return (
        <div className="project_container">
            <ul ref= {content} className = "project" >
            {
                useLinksCreate(Projects)
            }
            </ul>
        </div>
    )
}

