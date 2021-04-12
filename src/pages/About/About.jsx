import React from 'react';

import './_About.scss';
import src from './photo_CV.webp';

export default function about() {
    return (
        <section className="me">
            <div className="content">
                <img src={src} alt=""></img>
                    <p className="presentation">
                        Passionné par le <strong>design graphique</strong>, l'<strong>édition</strong>,<br></br> 
                        la <strong> création web </strong> et le <strong>développement front&#8209;end</strong><br></br> 
                        je suis <span><strong>Freelance</strong></span> depuis <span className="date">2016</span>. 
                    </p>
                <hr></hr>
                    <p className="competence">
                        <div>
                        J'associe fonds, formes, couleurs et typographies dans un esprit de symbiose afin de rendre l'expérience visuelle forte 
                        et émotionnellement riche.
                        </div>
                        <hr></hr>
                        <div>
                        Mon éventail de compétences s'étend du concept à la réalisation et de la direction artistique à l'aspect technique.
                        </div>
                        <hr></hr>
                        <div>
                        Pour continuer d'évoluer, je experimente sur de nombreux projets graphiques print et web, illustrations, typographies… qui sont autant de possibilités créatives dans lesquelles je peux m'
                        exprimer.
                        </div>
                    </p>
                <hr></hr>
            </div>
        </section>
    )
}
