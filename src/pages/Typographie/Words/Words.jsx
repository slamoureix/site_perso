import React, { useState } from 'react'

import {
    useSelector
} from 'react-redux';


import Nav from '../../../components/Navigation/Navigation';

import {
    default as nameProject
} from './data';

import Preview from '../../../components/Preview/Preview';

export default function Words() {
    

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section className= {`${nameProject.name}__presentation`}>
                <div className= {`${nameProject.name}__title`}><h1>{nameProject.name}</h1></div>

                <div className = {`${nameProject.name}__preview`}>
                <Preview path = '/Typographie' typeName = {nameProject.type} />
                </div>

            </section>
            
            <Nav rep= {nameProject.rep} routes= {TypographieRoutes}/>
        </article>
    )
}
