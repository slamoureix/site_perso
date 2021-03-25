import React from 'react';
import Link from './components/Link/Link';

export function useLinksCreate(Links) {
        let arrLinks = [];
        for (let name of Object.keys(Links)) {
        let L = Links[name];
        let link = 
        <Link 
        key={L.path} 
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
