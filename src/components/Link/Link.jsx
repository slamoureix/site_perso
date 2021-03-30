import React from 'react';
import {
    Link
} from 'react-router-dom';

import Picture from '../Picture/Picture';

export default function Links(props) {

    switch (props.typeofLink) {
        case 'external':
            return (
            <li>
                <a href={props.path} target={props.target} className="link">{props.name}</a>
            </li>
        );
        case 'project':
            return (
            <li className="link__project">
                <Link className="link" to={props.path} replace>{props.name}</Link>
                <span className="typeOfLink">{props.type}</span>
                <div className="link__project_cover">
                    <Picture 
                    rep={props.rep}
                    src_default={props.cover.src_default}
                    alt={props.cover.alt}
                    sources={props.cover.sources}
                    />
                </div>
            </li>
        );
        default:
            return (
            <li>
                <Link className="link" to={props.path} replace>{props.name}</Link>
            </li>
        );
    }
}
