// COMPONENTS //

import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';

import Home from '../pages/Home/Home';

import Typographie from '../pages/Typographie/Typographie';
import Dev from '../pages/Developpement/Developpement';
import UxUi from '../pages/UxUi/UxUi';
import Edition from '../pages/Edition/Edition';
import Divers from '../pages/Divers/Divers';

// DATAS //

import DevData from '../pages/Developpement/data';
import DiversData from '../pages/Divers/data';
import TypoData from '../pages/Typographie/data';
import EditionData from '../pages/Edition/data';
import UxUiData from '../pages/UxUi/data';

// Config
import {external} from '../config.js'

/*
    utilisation d'un tableau associatif -> utilisable avec la boucle for... In 
*/

export const routes = {
    Home: {
        home: {
            path: '/',
            name: 'home',
            component: Home,
        },
    },
    Nav: {
        Legals: {
            path: '/Legals',
            name: 'Mentions Légales',
            component: Legals,
        },
        Contact: {
            path: '/Contact',
            name: 'Contact',
            component: Contact,
        },
        Lab: {
            path: 'https://codepen.io/your-work',
            name: 'Lab',
            target: '_blank',
            typeofLink: external
        }
    },
    Projects: {
        Developpement: {
            path: DevData.routes.path,
            name: DevData.name,
            type: DevData.type,
            typeofLink: DevData.routes.typeofLink,
            rep: DevData.rep,
            cover: DevData.img.cover,
            component: Dev,
        },
        Typographie: {
            path: TypoData.routes.path,
            name: TypoData.name,
            type: TypoData.type,
            typeofLink: TypoData.routes.typeofLink,
            rep: TypoData.rep,
            cover: TypoData.img.cover,
            component: Typographie,
        },
        UiUx: {
            path: UxUiData.routes.path,
            name: UxUiData.name,
            type: UxUiData.type,
            typeofLink: UxUiData.routes.typeofLink,
            rep: UxUiData.rep,
            cover: UxUiData.img.cover,
            component: UxUi,
        },
        Edition: {
            path: EditionData.routes.path,
            name: EditionData.name,
            type: EditionData.type,
            typeofLink: EditionData.routes.typeofLink,
            rep: EditionData.rep,
            cover: EditionData.img.cover,
            component: Edition,
        },
        Divers: {
            path: DiversData.routes.path,
            name: DiversData.name,
            type: DiversData.type,
            typeofLink: DiversData.routes.typeofLink,
            rep: DiversData.rep,
            cover: DiversData.img.cover,
            component: Divers,
        }
    },
    Social: {
        Instagram: {
            path: 'https://www.instagram.com/slamoureix/?hl=fr',
            name: 'Instagram',
            target: '_blank',
            typeofLink: external
        },
        Behance: {
            path: 'https://www.behance.net/cebastiens/projects',
            name: 'Behance',
            target: '_blank',
            typeofLink: external
        },
        Linkedin: {
            path: 'https://www.linkedin.com/in/sebastien-lamoureix-2642801a/',
            name: 'Linkedin',
            target: '_blank',
            typeofLink: external
        }
    }
}

export default function RoutesReducer(state = routes) {
    return state;
}