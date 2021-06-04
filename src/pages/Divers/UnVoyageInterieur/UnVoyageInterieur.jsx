import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import DeveloppementTemplate from '../../../Templates/Developpement';
// datas 
import {
    UnVoyageInterieurData as nameProject
} from './data.js';

export default function UnVoyageInterieur() {

    const [DatasImgState] = useState(nameProject.img.content);

    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return (
        <>
        hello 
        </>
    )
}
