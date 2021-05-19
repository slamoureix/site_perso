import React from 'react';

import Nav from '../Navigation/Navigation';
import ToSite from '../ToSite/ToSite';
import Skills from '../Skills/Skills';
import useCreateImageGrid from '../useCreateImageGrid';

export default function DeveloppementTemplate({
    nameProject,
    datasImgState,
    routesDeveloppement
}) {
    return (
        <>
        <article className= {`${nameProject.rep}__project_container`}>
            <section>
                    <div className = {`${nameProject.rep}__head_row`}>
                        <div className= "title"><h1>{nameProject.name}</h1></div>
                        <div className= "year"><p>{nameProject.year}</p></div>
                    </div>

                    <div className= {`${nameProject.rep}__content`}><p>{nameProject.content}</p></div>

                    <div className = {`${nameProject.rep}__skills_row`}>
                    <Skills title= {nameProject.competence.title} skills={nameProject.competence.comp}/>
                    </div>

                    <div className = {`${nameProject.rep}__skills_row`}>
                        <Skills title= {nameProject.techno.title} skills={nameProject.techno.technos}/>
                    </div>

                    <div className= {`${nameProject.rep}_row`}>

                    {useCreateImageGrid(datasImgState, nameProject.rep)} {/* à voir en fonction du nombre d'image */}
                    <ToSite toSite= {nameProject.adress}/>
                    </div>
            </section>
        </article>
        <Nav rep= {nameProject.rep} routes={routesDeveloppement}/>
    </>
    )
}
