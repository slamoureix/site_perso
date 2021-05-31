import React from 'react';

import Nav from '../components/Navigation/Navigation';
import ToSite from '../components/ToSite/ToSite';
import Skills from '../components/Skills/Skills';
import useCreateImageGrid from '../useCreateImageGrid';



export default function DeveloppementTemplate({
    nameProject,
    datasImgState,
    routesDeveloppement
}) {
    return (
        
        <article className= {`${nameProject.rep}__project_container`}>
            
                    <header className = {`${nameProject.rep}__head_row`}>
                        <div className= "title"><h1>{nameProject.name}</h1></div>
                        <time dateTime= "2020" className= "year">{nameProject.year}</time>
                    </header>

                    <section className= {`${nameProject.rep}__content`}>
                    <p>{nameProject.content}</p>
                    </section>

                    <section className = {`${nameProject.rep}__skills_row`}>
                    <Skills title= {nameProject.competence.title} skills={nameProject.competence.comp}/>
                    </section>

                    <section className = {`${nameProject.rep}__skills_row`}>
                        <Skills title= {nameProject.techno.title} skills={nameProject.techno.technos}/>
                    </section>

                    <section> 
                    <ul className = {`${nameProject.rep}__images_row` }>
                    {useCreateImageGrid(datasImgState, nameProject.rep)} {/*à voir en fonction du nombre d'image*/}
                    </ul>
                    <ToSite toSite= {nameProject.adress}/>
                    </section>
            
        <Nav rep= {nameProject.rep} routes={routesDeveloppement}/>
        </article>
    )
}
