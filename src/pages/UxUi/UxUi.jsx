import React from 'react';
import { useSelector } from 'react-redux';

// datas 
import { default as nameProject } from './data.js';

// SCSS

//Scripts


//Components
import Nav from '../../components/Navigation/Navigation';
import { useLinksCreate } from '../../uselinksCreate.jsx';

export default function UxUi() {
    

    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>

            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className={`${nameProject.rep}__type`}><p><strong>{nameProject.type}</strong></p></div>
            </section>

            <nav>
                <ul className= {`${nameProject.rep}__links_container`}>{useLinksCreate(UxUiRoutes)}</ul>
            </nav>

            <Nav rep = {nameProject.rep} routes = {ProjectsRoutes}/>
        </article>
    )
}
