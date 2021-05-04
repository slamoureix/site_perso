
import React, {useState} from 'react';
import useCreateNavigation from '../../useCreateNavigation';

// datas 
import JHV_data from '../../assets/JHV/data.js';

import CreateImageGrid from '../../CreateImageGrid';

import './_JHV.scss';
import { useSelector } from 'react-redux';

export default function JeanetteHussVarnet() {
    const rep = JHV_data.img.rep;
    const [DatasImgState] = useState(JHV_data.img.content);

    const ObjProjects = useSelector(state => ({
        ...state.RoutesReducer.Projects
    }));

    return (
        <article className="JHV__project_container">
            <section className="JHV__presentation">
                <div className="JHV__title"><h1>{JHV_data.name}</h1></div>
                <div className="JHV__year"><p>{JHV_data.year}</p></div>
                <div className="JHV__type"><p><strong>{JHV_data.type}</strong></p></div>
                <div className="JHV__content">
                <p>{JHV_data.content}</p></div>
            </section>
            <section className="JHV__grid">{CreateImageGrid(DatasImgState, rep)}</section>
            <nav className = "JHV__navigation">{useCreateNavigation(rep, ObjProjects)}</nav>  
        </article>
    )
}
