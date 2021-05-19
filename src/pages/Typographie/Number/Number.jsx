import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import Nav from '../../../components/Navigation/Navigation';

import { numberData as nameProject } from './data';

import useCreateImageGrid from '../../../useCreateImageGrid';

import './_Number.scss';

import Preview from '../../../components/Preview/Preview';

export default function Letter() {
    const [DatasImgState] = useState(nameProject.img.content);

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section>
            <div className="head_row">
                <div className= "title"><h1>{nameProject.name}</h1></div>
            </div>

                {/* <div className = {`${nameProject.name}__preview`}>
                <Preview path = '/Typographie' typeName = {nameProject.type} />
                </div> */}

            </section>
            <section className= {`${nameProject.name}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.name)}</section>
            <Nav rep= {nameProject.rep} routes= {TypographieRoutes}/>
        </article>
    )
}

