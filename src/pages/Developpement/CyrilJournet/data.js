import {
    developement,
    project,
    techno,
    cptUi,
    php,
    acf,
    wordpress,
    greenSock,
    comp,
    javascript,
    devFrontBack,
    integration,
    responsive,
    animations
} from './../../../config';

import {
    img
} from './imgDatas';

import CyrilJournet from './CyrilJournet'


export const cyrilJournetData = {
    routes: {
        path:"/CyrilJournet",
        typeofLink: project,
        component: CyrilJournet
    },
    name: "Cyril Journet",
    type: developement,
    content: "lorem ipsum et dolors etc etc etc",
    techno : {
        title: techno,
        technos: [php, wordpress, acf, cptUi, javascript ,greenSock, ]
    },
    competence : {
        title: comp,
        comp: [devFrontBack, integration, responsive, animations]
    },
    year: "2021",
    adress: "https://www.cyriljournet.com/",
    rep: "CyrilJournet",
    img: img

}
