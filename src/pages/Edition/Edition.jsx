import React from 'react';
import { useSelector } from 'react-redux';

// datas 
import { default as nameProject } from './data.js';

//Components
import { useLinksCreate } from '../../uselinksCreate.jsx';

export default function Edition() {
    

    const TypographieRoutes = useSelector(({
        AllRoutesReducer
    }) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.rep}__category_container`}>
            <section className= {`${nameProject.rep}__category__presentation`}>
                <h1>{nameProject.name}</h1>
            </section>
            <div id = "typographie" className = "project_container" >
                <ul className="project">{useLinksCreate(TypographieRoutes)}</ul>
            </div>
        </article>
    )
}
