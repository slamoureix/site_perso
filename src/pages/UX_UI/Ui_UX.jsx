import React, {useState} from 'react';

import useCreateNavigation from '../../useCreateNavigation';

// datas 
import { default as nameProject } from '../../assets/typographie/data.js';

import CreateImageGrid from '../../CreateImageGrid';

import './_number.scss';

export default function Number() {
    const rep = nameProject.img.rep;
    const [DatasImgState] = useState(nameProject.img.content);

    return (
        <article className = "NUMBER__project_container" >
            <section className="NUMBER__presentation">
                <div className="NUMBER__title"><h1>{nameProject.name}</h1></div>
                <div className="NUMBER__year"><p>{nameProject.year}</p></div>
                <div className="NUMBER__type"><p><strong>{nameProject.type}</strong></p></div>
                <div className="NUMBER__content">
                <p>{nameProject.content}</p></div>
            </section>
            <section className="NUMBER__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "NUMBER__navigation">{useCreateNavigation(rep)}</nav>  
        </article>
    )
}
