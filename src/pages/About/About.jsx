import React, { useEffect} from 'react';

import {
    gsap
} from "gsap";

/* IMG */
import src from './photo_CV_5.webp';


const tl = gsap.timeline()




export default function About() {
    useEffect(() => {
        tl.from(".me", {
            display: "none",
            opacity: 0,
            delay: 0,
            duration: 0
        })

        tl.from(".portrait", {
            y: 50,
            opacity: 0,
            duration: .5,
            ease: "power5",
            delay: .1
        })

        tl.from('.presentation', {
            x: -50,
            opacity: 0,
            duration: .8,
            ease: "power4",
            delay: .3
        })
        tl.from(".separate", {
            opacity: 0,
            x: -50,
            delay: .1
        })
        
    
        return () => {
            
        }
    
    }, [])
    

    return (
        <article className="me">
            <div className="me_content">
                <span className="separate" />
                <img className="portrait" src={`${src}`} loading="lazy" lazy="true" alt="portrait de sebastien lamoureix" />

                    <p className="presentation">
                        Passionné par le <strong>design graphique</strong>, l'<strong>édition</strong>,<br></br> 
                        la <strong> création web </strong> et le <strong>développement front&#8209;end</strong><br></br> 
                        je suis <span><strong>Freelance</strong></span> depuis <span className="date">2016</span>. 
                        
                    </p>
                <span className="separate" />
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
        </article>
    )
}
