import React, { useEffect,useRef } from 'react';



export default function Picture(
    {
    rep,
    src_default, 
    source, 
    alt
    }) 
    {
        const refImg = useRef()

        useEffect(() => {
            import(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`).then(value => (
                refImg.current.setAttribute("src", `${value.default}`)))
        }, [])

        /* fonctionne avec require */
        // let R = require(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`).default

    function OnTakeSources() {
        let arrSources = [];
        for (let name of Object.keys(source)) {
            let S = source[name];
            let baliseSource = <source key = {name} srcSet = {S.src} type = {S.type} media = {S.media} />;
            arrSources.push(baliseSource);
        }
        return arrSources;
    }
    
    return (
            <picture>
                {OnTakeSources()}
                <img ref={refImg} alt = {alt} />
                {/* <img src={R} alt = {alt} /> */}
            </picture>
    )
}
