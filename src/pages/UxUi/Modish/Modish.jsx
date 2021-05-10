import React, { useState } from 'react'
import { useSelector } from 'react-redux';



import Preview from '../../../components/Preview/Preview';
import Nav from '../../../components/Navigation/Navigation';
import CreateImageGrid from '../../../scripts/CreateImageGrid';

import { modishData as nameProject } from './data';


export default function Modish() {
    
        const [DatasImgState] = useState(nameProject.img.content);

    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section className= {`${nameProject.name}__presentation`}>
                <div className= {`${nameProject.name}__title`}><h1>{nameProject.name}</h1></div>

                <div className = {`${nameProject.name}__preview`} > 
                    <Preview 
                path = '/UxUi'
                typeName = {nameProject.type}/>
                </div>

            </section>
            <section className= {`${nameProject.name}__grid`}>{CreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {UxUiRoutes}/>
        </article>
    )
    
}
