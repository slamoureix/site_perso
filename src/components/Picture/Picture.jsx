import React from 'react';



export default function Picture(
    {
    src_default, 
    source, 
    alt
    }) 
    {
        // import("../../assets/JH--V/Img/01.jpg")
    

    function getURL() {
        let img = <img src = ''
        alt = {alt}
        />;
        return img;
    }
    

    function OnTakeSources() {
        let arrSources = [];
        for (let name of Object.keys(source)) {
            let S = source[name];
            let baliseSource = <source key={name} srcSet={S.src} type={S.type} media={S.media} />;
            arrSources.push(baliseSource);
        }
        return arrSources;
    }
    
    return (
            <picture>
                {OnTakeSources()}
                {getURL()}
            </picture>
    )
}
