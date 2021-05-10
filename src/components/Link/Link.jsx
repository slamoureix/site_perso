import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

import {external, project, underProject} from '../../config.js';


import CreatePicture from '../../scripts/CreatePicture';

export default function Links(props) {

    const ref = useRef()

    


    switch (props.typeofLink) {
        case external:
            return (
            <li>
                <a ref={ref} href={props.path} target={props.target} className="link">{props.name}</a>
            </li>
        );
        case project:
            return (
            <li className="link__project">
            <div className="link__project_box">
            <Link 
            ref = {ref}
            to = {props.path}
            replace >
                <span className="link link__project_name">{props.name}</span>
                <div className ="link link__project_cover" >
                {CreatePicture(props.rep, props.cover.src_default, props.cover.sources, props.cover.alt)}
                </div>
            </Link>
            </div>
            </li>
        );
        case underProject:
            return (
            <>
            <li className="link__underProject_name">
            <Link ref={ref} to={props.path} replace>
                <span className = "link link__underProject"> { props.name} </span>
            </Link>
            </li>
            <span className="separation"></span>
            </>
        );
        default:
            return (
            <li>
                <Link ref={ref} className="link" to={props.path} replace>{props.name}</Link>
            </li>
        );
    }
}

