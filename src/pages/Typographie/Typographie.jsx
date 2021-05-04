import React from 'react';
import {useSelector} from 'react-redux';
import {useLinksCreate} from '../../uselinksCreate';


import Nav from '../../components/Navigation/Navigation';
// datas 
import { default as nameProject } from './data.js';

import './_typography.scss';



export default function Typographie() {

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));
    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className= {`${nameProject.rep}__year`}><p>{nameProject.year}</p></div>
                {/* <div className={`${rep}__type`}><p><strong>{nameProject.type}</strong></p></div> */}
                <div className = {`${nameProject.rep}__content`}>
                <p>{nameProject.content}</p></div>
            </section>

            <ul>{useLinksCreate(TypographieRoutes)}</ul>
            <Nav rep= {nameProject.rep} routes= {ProjectsRoutes}/>
            
        </article>
    )
}


