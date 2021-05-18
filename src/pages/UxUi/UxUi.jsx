import React from 'react';
import { useSelector } from 'react-redux';

// datas 
import { uxUiData as nameProject } from './data.js';

// SCSS

//Scripts

//Components
import { useLinksCreate } from '../../uselinksCreate.jsx';

export default function UxUi() {
    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return (
        <article className= {`${nameProject.rep}__category_container`}>
            <div className= {`${nameProject.rep}__category_presentation`}>
                <h1>{nameProject.name}</h1>
            </div>
            <div id="uxui" className="project_container">
                <ul className="project">{useLinksCreate(UxUiRoutes)}</ul>
            </div>
        </article>
    )
}
