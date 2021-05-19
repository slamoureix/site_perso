import React from 'react';
import uuid from 'react-native-uuid';

import "./_skills.scss";

export default function Skills({title, skills}) {
    return (
        <>
            <span className= "title"><h3>{title}&nbsp;:</h3></span>
            <ul>
                {skills.map(skill => (<li key={uuid.v4()}><strong>{skill}</strong>&#8239;<span/>&#8239;</li>))}
            </ul>
        </>
    )
}
