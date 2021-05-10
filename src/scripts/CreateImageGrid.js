import React from 'react';
import CreatePicture from './CreatePicture';

const CreateImageGrid = (datasImage, repertory) => {
    let arrayDiv = []
        for (let index = 0; index < datasImage.length; index++) {
            const element = datasImage[index];
            let div = <div key={index} className={`${repertory}__item-${index}`}> 
            {CreatePicture(repertory, element.src_default, element.sources, element.alt)}
            </div>
            arrayDiv.push(div);
        }
    return arrayDiv;
}

export default CreateImageGrid;