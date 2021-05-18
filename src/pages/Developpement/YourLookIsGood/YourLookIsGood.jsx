import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Nav from '../../../components/Navigation/Navigation';
import ToSite from '../../../components/ToSite/ToSite';
import Skills from '../../../components/Skills/Skills';
import useCreateImageGrid from '../../../useCreateImageGrid';


// datas 
import {yourLookIsGoodData as nameProject } from './data.js';

export default function YourLookIsGood() {
    const [DatasImgState] = useState(nameProject.img.content);
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));
    

    return (
        <article className= {`${nameProject.rep}__project_container`}>
            <section className= {`${nameProject.rep}__presentation`}>

                    <div className = "head_box">
                        <div className= "title"><h1>{nameProject.name}</h1></div>
                        <div className= "year"><p>{nameProject.year}</p></div>
                    </div>

                    <div className= "content"><p>{nameProject.content}</p></div>
                    <Skills title= {nameProject.competence.title} skills={nameProject.competence.comp}/>
                    <Skills title= {nameProject.techno.title} skills={nameProject.techno.technos}/>
                    {useCreateImageGrid(DatasImgState, nameProject.rep)} {/* à voir en fonction du nombre d'image */}
                    <ToSite toSite= {nameProject.adress}/>
            </section>


            <Nav rep= {nameProject.rep} routes= {DeveloppementRoutes}/>
        </article>
    )
}