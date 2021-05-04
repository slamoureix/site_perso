import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import useCreateNavigation from '../../../useCreateNavigation';

import { default as nameProject } from './data';

import CreateImageGrid from '../../../scripts/CreateImageGrid.js';

import './_letter.scss';

function Letter() {
    const projectName = nameProject.name ;
    const [DatasImgState] = useState(nameProject.img.content);

    const Reducer = useSelector(state => ({
        ...state.TypographieReducer.Typographie
    }));

    return (
        <article className = {`${projectName}__project_container`}>
            <section className = {`${projectName}__presentation`}>
                <div className={`${projectName}__title`}><h1>{nameProject.name}</h1></div>
                <div className={`${projectName}__type`}><p><strong>{nameProject.type}</strong></p></div>
                <div className = {`${projectName}__content`}>
                <p>{nameProject.content}</p></div>
            </section>
            <section className= {`${projectName}__grid`}>{CreateImageGrid(DatasImgState, nameProject.name)}</section>
            <nav className= {`${projectName}__navigation`}>{useCreateNavigation(projectName, Reducer)}</nav>  
        </article>
    )
}

export default Letter