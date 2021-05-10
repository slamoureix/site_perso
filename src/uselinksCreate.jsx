import React from 'react';
import Link from './components/Link/Link';

export function useLinksCreate(Links) {
        let arrLinks = [];

        

        for (let name of Object.keys(Links)) {
        let L = Links[name];
        let link = 
        <Link 
        key = {L.name}
        exact path={L.path} 
        name={L.name} 
        type={L.type}
        typeofLink = {L.typeofLink}

        target={L.target} 

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

