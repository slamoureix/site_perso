import React, { useEffect, useState } from 'react';
import JHV_data from '../../assets/JH--V/data.js';
import useCreatePicture from '../../useCreatePicture';
import './_JHV.scss';

export default function JeanetteHussVarnet() {
    const [dataImgState] = useState(JHV_data.img.cover);

    return (
        <article className="JHV">
            <section className="row JHV__presentation">
                <div className="JHV__title"><h1>{JHV_data.name}</h1></div>
                <div className= "JHV__year"><p>{JHV_data.year}</p></div>
                <div className= "JHV__type"><p><strong>{JHV_data.type}</strong></p></div>
                <div className="JHV__content">
                <p>{JHV_data.content}</p></div>
            </section>

            <section className="row JHV__diaporama">
            {useCreatePicture(JHV_data.img.rep, dataImgState.src_default, dataImgState.sources, dataImgState.alt)}
            </section>

            {/* <div className="grid">
            <section className="row">
                <div className="col-1"><div className="content-col"></div></div>
                <div className="col-1"><div className="content-col"></div></div>
                <div className="col-1"><div className="content-col"></div></div>
                <div className="col-1"><div className="content-col"></div></div>
                <div className="col-1"><div className="content-col"></div></div>
                <div className="col-1"><div className="content-col"></div></div>
            </section>
            </div> */}

            <nav>
                <div className="last">prev</div>
                <div className="prev">last</div>
            </nav>
        </article>
    )
}
