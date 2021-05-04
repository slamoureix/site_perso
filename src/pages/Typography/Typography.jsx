import React from 'react';

import useCreateNavigation from '../../useCreateNavigation';
import {useLinksCreate} from '../../uselinksCreate';

// datas 
import { default as nameProject } from '../../assets/Typographie/data.js';

import './_typography.scss';
import { useSelector } from 'react-redux';

export default function Typographie() {
    const rep = nameProject.rep;

    const underProjectLinks = useSelector(state => ({
        ...state.RoutesReducer.Typographie
    }));
    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className = {`${rep}__project_container`}>
            <section className = {`${rep}__presentation`}>
                <div className={`${rep}__title`}><h1>{nameProject.name}</h1></div>
                <div className={`${rep}__year`}><p>{nameProject.year}</p></div>
                <div className={`${rep}__type`}><p><strong>{nameProject.type}</strong></p></div>
                <div className = {`${rep}__content`}>
                <p>{nameProject.content}</p></div>
            </section>
            <ul>{useLinksCreate(underProjectLinks)}</ul>
            <nav className = {`${rep}__navigation`}>{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}


