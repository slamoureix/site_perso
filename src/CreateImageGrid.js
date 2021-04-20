import React from 'react';
import CreatePicture from './CreatePicture';

export default function CreateImageGrid(datasImgage, repertory) {
    let arrayDiv = []
        for (let index = 0; index < datasImgage.length; index++) {
            const element = datasImgage[index];
            let div = <div key={index} className={`${repertory}__item-${index}`}> 
            {CreatePicture(repertory, element.src_default, element.sources, element.alt)}
            </div>
            arrayDiv.push(div);
        }
    return arrayDiv;
}