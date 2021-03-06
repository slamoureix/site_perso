import React, {useState} from 'react';
import { useSelector } from 'react-redux';

// datas 
import { default as nameProject } from './data.js';

// SCSS
import './_Edition.scss';

//Scripts
import useCreateImageGrid from '../../useCreateImageGrid';

//Components
import Nav from '../../components/Navigation/Navigation';

export default function Edition() {
    const [DatasImgState] = useState(nameProject.img.content);

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>
                <div className= {`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className= {`${nameProject.rep}__year`}><p>{nameProject.year}</p></div>
                <div className={`${nameProject.rep}__type`}><p><strong>{nameProject.type}</strong></p></div>
                <div className = {`${nameProject.rep}__content`}>
                <p>{nameProject.content}</p></div>
            </section>
            <section className={`${nameProject.rep}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep = {nameProject.rep} routes = {ProjectsRoutes}/>
        </article>
    )
}
