import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DeveloppementTemplate from '../../../Templates/Developpement';

// datas 
import {yourLookIsGoodData as nameProject } from './data.js';

import './_yourLookIsGood.scss';

export default function YourLookIsGood() {
    const [DatasImgState] = useState(nameProject.img.content);
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return <DeveloppementTemplate nameProject={nameProject} datasImgState={DatasImgState} routesDeveloppement={DeveloppementRoutes} />

}