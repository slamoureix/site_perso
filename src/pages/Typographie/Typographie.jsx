import React from 'react';
import {useSelector} from 'react-redux';

import HomeSection from '../../Templates/HomeSection';

// datas 
import { typoData as nameProject } from './data.js';

export default function Typographie() {
    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));
    return <HomeSection nameProject={nameProject} routes={TypographieRoutes} />
}


