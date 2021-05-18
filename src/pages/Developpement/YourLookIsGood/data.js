import YourLookIsGood from './YourLookIsGood';
import {
    img
} from './imgDatas';

import {
    developement,
    project,
    devFrontBack,
    integration,
    responsive,
    php,
    wordpress,
    javascript,
    greenSock,
    simpleParallax,
    scrollMagic,
    sass,
    bootstrap,
    acf,
    cptUi
} from './../../../config';

export const yourLookIsGoodData = {
    routes: {
        path: "/YourLookIsGood",
        typeofLink: project,
        component: YourLookIsGood
    },
    name: "Your Look Is Good",
    type: developement,
    content: "Your Look is Good est un blog de tendance vestimentaire fictif réalisé dans le cadre de mon stage de fin de formation au sein de l'agence Danka. Le design a été réalisé par Guillaume Bonnecase, directeur artistique de l'agence et tuteur de stage.",
    techno: {
        title: "Technologies",
        technos: [php, wordpress, acf, cptUi, javascript, greenSock, simpleParallax, scrollMagic, sass, bootstrap]
    },
    competence: {
        title: "Compétences",
        comp: [devFrontBack, integration, responsive]
    },
    year: "2020",
    adress: "https://YourLookIsGood.com",
    rep: "YourLookIsGood",
    img: img
}