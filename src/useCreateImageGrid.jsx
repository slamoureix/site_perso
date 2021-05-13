import React from 'react';
import CreatePicture from './scripts/CreatePicture';

export default function useCreateImageGrid(datasImage, repertory){
    let arrayDiv = [];
        for (let index = 0; index < datasImage.length; index++) {
            const element = datasImage[index];
            let div = <div key={index} className={`${repertory}__item-${index}`}> 

            {CreatePicture.type(repertory, element.src_default, element.sources, element.alt)}

            </div>;
            arrayDiv.push(div);
        }

    return arrayDiv;
}