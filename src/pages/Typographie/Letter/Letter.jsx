import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//component
import Nav from '../../../components/Navigation/Navigation';
import Preview from '../../../components/Preview/Preview';

import { letterData as nameProject } from './data';

import CreateImageGrid from '../../../scripts/CreateImageGrid.js';

import './_letter.scss';




export default function Letter() {
    

    const [DatasImgState] = useState(nameProject.img.content);

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section className= {`${nameProject.name}__presentation`}>
                <div className= {`${nameProject.name}__title`}><h1>{nameProject.name}</h1></div>

                <div className = {`${nameProject.name}__preview`} > 
                    <Preview 
                path = '/Typographie'
                typeName = {nameProject.type}/>
                </div>

            </section>
            <section className= {`${nameProject.name}__grid`}>{CreateImageGrid(DatasImgState, nameProject.name)}</section>
            <Nav rep= {nameProject.rep} routes= {TypographieRoutes}/>
        </article>
    )
}