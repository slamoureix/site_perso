
import React, { useState } from 'react';
import JHV_data from '../../assets/JHV/data.js';

import CreateImageGrid from '../../CreateImageGrid.js';
import './_JHV.scss';

export default function JeanetteHussVarnet() {
    const rep = JHV_data.img.rep;
    const [DatasImgState] = useState(JHV_data.img.content)

    return (
        <article className="JHV">
            <section className="row JHV__presentation">
                <div className="JHV__title"><h1>{JHV_data.name}</h1></div>
                <div className= "JHV__year"><p>{JHV_data.year}</p></div>
                <div className= "JHV__type"><p><strong>{JHV_data.type}</strong></p></div>
                <div className="JHV__content">
                <p>{JHV_data.content}</p></div>
            </section>

            <section className="row JHV__grid">
            {CreateImageGrid(DatasImgState, rep)}
            </section>
            <nav>
                <div className="last">prev</div>
                <div className="prev">last</div>
            </nav>
        </article>
    )
}
