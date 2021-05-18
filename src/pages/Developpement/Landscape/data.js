import Landscape from './Landscape';
import {img} from './imgDatas';

import {developement, project} from './../../../config';

export const landscapeData = {
    routes: {
        path: "/Landscape",
        typeofLink: project,
        component: Landscape
    },
    name: "Landscape",
    type: developement,
    content: "Utilisation de l'api unsplash, création d'un diaporama sous react JS",
    techno: "react JS",
    outils: "VsCode",
    rep: "Landscape",
    img: img
}

