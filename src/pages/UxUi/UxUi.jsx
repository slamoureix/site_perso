import React from 'react';
import { useSelector } from 'react-redux';
// datas 
import { uxUiData as nameProject } from './data.js';
//Components
import HomeSection from '../../Templates/HomeSection';

export default function UxUi() {
    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return <HomeSection nameProject={nameProject} routes={UxUiRoutes} />
}
