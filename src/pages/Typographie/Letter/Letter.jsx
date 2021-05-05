import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import Nav from '../../../components/Navigation/Navigation';

import { default as nameProject } from './data';

import CreateImageGrid from '../../../scripts/CreateImageGrid.js';

import './_letter.scss';
import { Link } from 'react-router-dom';

function Letter() {
    const [DatasImgState] = useState(nameProject.img.content);

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section className= {`${nameProject.name}__presentation`}>
                <div className= {`${nameProject.name}__title`}><h1>{nameProject.name}</h1></div>
                <div className = {`${nameProject.name}__type`}>
                <Link to = "/Typographie">
                <p><strong className="link">{nameProject.type}</strong></p>
                </Link>
                </div>

            </section>
            <section className= {`${nameProject.name}__grid`}>{CreateImageGrid(DatasImgState, nameProject.name)}</section>
            <Nav rep= {nameProject.rep} routes= {TypographieRoutes}/>
        </article>
    )
}

export default Letter