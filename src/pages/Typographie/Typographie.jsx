import React from 'react';
import {useSelector} from 'react-redux';
import {useLinksCreate} from '../../uselinksCreate';

// datas 
import { typoData as nameProject } from './data.js';

import './_typography.scss';



export default function Typographie() {
    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.rep}__category_container`}>
            <div className= {`${nameProject.rep}__category_presentation`}>
                <h1>{nameProject.name}</h1>
            </div>
            <div id = "typographie" className = "project_container" >
                <ul className="project">{useLinksCreate(TypographieRoutes)}</ul>
            </div>
        </article>
    )
}


