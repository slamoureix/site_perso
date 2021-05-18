import React from 'react';

import './_About.scss';
import src from './photo_CV.webp';

export default function about() {
    return (
        <section className="me">
            <div className="me_content">
                <hr></hr>
                <img src={src} loading="lazy" alt=""></img>
                    <p className="presentation">
                        Passionné par le <strong>design graphique</strong>, l'<strong>édition</strong>,<br></br> 
                        la <strong> création web </strong> et le <strong>développement front&#8209;end</strong><br></br> 
                        je suis <span><strong>Freelance</strong></span> depuis <span className="date">2016</span>. 
                    </p>
                <hr></hr>
                    {/* <p className="competence">
                        
                        J'associe fonds, formes, couleurs et typographies dans un esprit de symbiose afin de rendre l'expérience visuelle forte 
                        et émotionnellement riche.
                        
                        <span></span>
                        
                        Mon éventail de compétences s'étend du concept à la réalisation et de la direction artistique à l'aspect technique.
                        
                        <span></span>
                        
                        Pour continuer d'évoluer, j'experimente sur de nombreux projets graphiques print et web, illustrations, typographies… 
                        
                    </p>
                <hr></hr> */}
            </div>
        </section>
    )
}
