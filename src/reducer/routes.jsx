// COMPONENTS //

import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';

import Home from '../pages/Home/Home';

import Edition from '../pages/Edition/Edition';
import Divers from '../pages/Divers/Divers';

// DATAS //

import {developpementData} from '../pages/Developpement/data';
import DiversData from '../pages/Divers/data';
import {typoData} from '../pages/Typographie/data';
import EditionData from '../pages/Edition/data';
import {uxUiData} from '../pages/UxUi/data';

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
            path: developpementData.routes.path,
            name: developpementData.name,
            type: developpementData.type,
            typeofLink: developpementData.routes.typeofLink,
            rep: developpementData.rep,
            cover: developpementData.img.cover,
            component: developpementData.routes.component,
        },
        Typographie: {
            path: typoData.routes.path,
            name: typoData.name,
            type: typoData.type,
            typeofLink: typoData.routes.typeofLink,
            rep: typoData.rep,
            cover: typoData.img.cover,
            component: typoData.routes.component,
        },
        UiUx: {
            path: uxUiData.routes.path,
            name: uxUiData.name,
            type: uxUiData.type,
            typeofLink: uxUiData.routes.typeofLink,
            rep: uxUiData.rep,
            cover: uxUiData.img.cover,
            component: uxUiData.routes.component,
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