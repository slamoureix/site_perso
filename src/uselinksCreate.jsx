import React from 'react';

import Links from './components/Link/Links';

export function useLinksCreate(ArrLinks) {
        let arrLinks = []
        
        for (let name of Object.keys(ArrLinks)) {
        let L = ArrLinks[name];

        let link = 
        <Links 

        key = {L.name}
        path={L.path} 
        name={L.name} 
        type={L.type}
        typeofLink = {L.typeofLink}

        target={L.target} 
        anchor={L.anchor} 

        rep={L.rep}
        cover={L.cover}
        />
        arrLinks.push(link)
        }
        
        return arrLinks
}


/*
var el = document.getElementById("t");
el.addEventListener("click", avoidNSError, false); //Firefox

function avoidNSError() {
        ElementInterval = setInterval(function () {
                /* Tracking or other request code goes here */
               /*clearInterval(ElementInterval);
        }, 0);

};*/

