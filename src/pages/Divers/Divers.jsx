import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import Nav from '../../components/Navigation/Navigation';
import useCreateImageGrid from '../../useCreateImageGrid';

// datas 
import { default as nameProject } from './data.js';


export default function Divers() {

    const [DatasImgState] = useState(nameProject.img.content);

    const ProjectsRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.RoutesReducer.Projects
    }));

    return (
        <article className={`${nameProject.rep}__project_container`}>
            <section className={`${nameProject.rep}__presentation`}>
                <div className={`${nameProject.rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className={`${nameProject.rep}__content`}>
                <p>{nameProject.content}</p></div>
            </section>
            {/* <section className={`${nameProject.rep}__grid`}>{CreateImageGrid(DatasImgState, nameProject.rep)}</section> */}
            <Nav rep= {nameProject.rep} routes= {ProjectsRoutes}/>
        </article>
    )
}
