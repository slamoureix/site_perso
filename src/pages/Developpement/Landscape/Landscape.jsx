import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Nav from '../../../components/Navigation/Navigation';

import useCreateImageGrid from '../../../useCreateImageGrid';


// datas 
import {landscapeData as nameProject } from './data.js';

export default function Landscape() {
    const [DatasImgState] = useState(nameProject.img.content);
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section>
                <div className="head_row">

                <div className="title"><h1>{nameProject.name}</h1></div>
                <div className= "year"><p>{nameProject.year}</p></div>
                </div>
                <div className = "content"><p>{nameProject.content}</p></div>
            </section>
            {/* <section className={`${nameProject.rep}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {DeveloppementRoutes}/> */}
        </article>
    )
}