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
        cover={L.cover}
        target={L.target} 
        typeofLink = {L.typeofLink}
        type={L.type}
        />
        arrLinks.push(link)
        }
        return arrLinks
}
