// COMPONENTS //

import Content from '../pages/Content/Content';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';
import Error from '../pages/404/404';

import Typographie from '../pages/Typographie/Typographie';
import Ylig from '../pages/Ylig/Ylig';
import UxUi from '../pages/UxUi/UxUi';
import Landscape from '../pages/Landscape/Landscape';
import CyrilJournet from '../pages/CyrilJournet/CyrilJournet';

import JeanetteHussVarnet from '../pages/JeanetteHussVarnet/JeanetteHussVarnet'
import Oldies from '../pages/Oldies/Oldies';

// DATAS //
import JeanetteHussVarnetData from '../pages/JeanetteHussVarnet/data';
import YligData from '../pages/Ylig/data';
import OldiesData from '../pages/Oldies/data';
import TypoData from '../pages/Typographie/data';
import LandscapeData from '../pages/Landscape/data';
import UxUiData from '../pages/UxUi/data';
import CyrilJournetData from '../pages/CyrilJournet/data';


/*
    utilisation d'un tableau associatif -> utilisable avec la boucle for... In 
*/

export const routes = {
    Home: {
        home: {
            path: '/',
            name: 'home',
            component: Content,
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
        me: {
            path: '/me',
            name: 'Me',
            component: About,
        },
        Lab: {
            path: 'https://codepen.io/your-work',
            name: 'Lab',
            target: '_blank',
            typeofLink: 'external'
        }
    },
    Projects: {
        Ylig: {
            path: YligData.routes.path,
            name: YligData.name,
            type: YligData.type,
            typeofLink: YligData.routes.typeofLink,
            rep: YligData.rep,
            cover: YligData.img.cover,
            component: Ylig,
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
        Landscape: {
            path: LandscapeData.routes.path,
            name: LandscapeData.name,
            type: LandscapeData.type,
            typeofLink: LandscapeData.routes.typeofLink,
            rep: LandscapeData.rep,
            cover: LandscapeData.img.cover,
            component: Landscape,
        },
        CyrilJournet: {
            path: CyrilJournetData.routes.path,
            name: CyrilJournetData.name,
            type: CyrilJournetData.type,
            typeofLink: CyrilJournetData.routes.typeofLink,
            rep: CyrilJournetData.rep,
            cover: CyrilJournetData.img.cover,
            component: CyrilJournet,
        },
        JHV: {
            path: JeanetteHussVarnetData.routes.path,
            name: JeanetteHussVarnetData.name,
            type: JeanetteHussVarnetData.type,
            typeofLink: JeanetteHussVarnetData.routes.typeofLink,
            rep: JeanetteHussVarnetData.rep,
            cover: JeanetteHussVarnetData.img.cover,
            component: JeanetteHussVarnet,
        },
        Oldies: {
            path: OldiesData.routes.path,
            name: OldiesData.name,
            type: OldiesData.type,
            typeofLink: OldiesData.routes.typeofLink,
            rep: OldiesData.rep,
            cover: OldiesData.img.cover,
            component: Oldies,
        }
    },
    Social: {
        Instagram: {
            path: 'https://www.instagram.com/slamoureix/?hl=fr',
            name: 'Instagram',
            target: '_blank',
            typeofLink: 'external'
        },
        Behance: {
            path: 'https://www.behance.net/cebastiens/projects',
            name: 'Behance',
            target: '_blank',
            typeofLink: 'external'
        },
        Linkedin: {
            path: 'https://www.linkedin.com/in/sebastien-lamoureix-2642801a/',
            name: 'Linkedin',
            target: '_blank',
            typeofLink: 'external'
        }
    },
    Admin: {
        Error: {
            path: '',
            name: 'Erreur',
            component: Error,
        }
    },
}

export default function RoutesReducer(state = routes) {
    return state;
}