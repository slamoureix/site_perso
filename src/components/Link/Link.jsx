import React from 'react';
import {
    Link
} from 'react-router-dom';
import CreatePicture from '../../CreatePicture';


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
            <div className="link__project_box">
            <Link to={props.path} replace>
                <span className="link link__project_name">{props.name}</span>
                <div className ="link link__project_cover" >
                {CreatePicture(props.rep, props.cover.src_default, props.cover.sources, props.cover.alt)}
                </div>
            </Link>
            </div>
            </li>
        );
        case 'underProject':
            return (
            <li className="link__project">
            <div className="link__project_box">
            <Link to={props.path} replace>
                <span className="link link__project_name">{props.name}</span>
            </Link>
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
