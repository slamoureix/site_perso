import React from 'react'
import { useSelector } from 'react-redux';

//hooks
import { useLinksCreate } from '../../uselinksCreate.jsx';
// datas 
import { developpementData as nameProject } from './data.js';

export default function Developement() {
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));


    
    return (
        <article className= {`${nameProject.rep}__category_container`}>
            <div className= {`${nameProject.rep}__category_presentation`}>
                <h1>{nameProject.name}</h1>
            </div>
            <div id="developpement" className="project_container">
                <ul className="project">{ useLinksCreate(DeveloppementRoutes) }</ul>
            </div>
        </article>
    )
}
