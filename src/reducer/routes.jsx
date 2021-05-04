// COMPONENTS //

import Content from '../pages/Content/Content';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';
import Error from '../pages/404/404';

import Typographie from '../pages/Typography/Typography';
import Letter from '../pages/Typography/letter/letter';
import Words from '../pages/Typography/words/words';

import Ylig from '../pages/Ylig/Ylig';
import Landscape from '../pages/Landscape/Landscape';
import CyrilJournet from '../pages/CyrilJournet/CyrilJournet';
import ChezSoiRienQueSoi from '../pages/ChezSoiRienQueSoi/ChezSoiRienQueSoi'
import JeanetteHussVarnet from '../pages/JHV/JeanetteHussVarnet'
import Oldies from '../pages/Oldies/Oldies';

// DATAS //
import JHV_data from '../assets/JHV/data';
import YLIG_data from '../assets/YLIG/data';
import OLDIES_data from '../assets/OLDIES/data';
import Typo_data from '../assets/Typographie/data';
import LANDSCAPE_data from '../assets/LANDSCAPE/data';
import CYRILJOURNET_data from '../assets/CYRILJOURNET/data';
import CSRQS_data from '../assets/CSRQS/data';

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
            path: YLIG_data.routes.path,
            name: YLIG_data.name,
            type: YLIG_data.type,
            typeofLink: YLIG_data.routes.typeofLink,
            rep: YLIG_data.img.rep,
            cover: YLIG_data.img.cover, // modif avec les vrais datas //
            component: Ylig,
        },
        Typographie: {
            path: Typo_data.routes.path,
            name: Typo_data.name,
            type: Typo_data.type,
            typeofLink: Typo_data.routes.typeofLink,
            rep: Typo_data.img.rep,
            cover: Typo_data.img.cover,
            component: Typographie,
        },
        Landscape: {
            path: LANDSCAPE_data.routes.path,
            name: LANDSCAPE_data.name,
            type: LANDSCAPE_data.type,
            typeofLink: LANDSCAPE_data.routes.typeofLink,
            rep: LANDSCAPE_data.img.rep,
            cover: LANDSCAPE_data.img.cover,
            component: Landscape,
        },
        CyrilJournet: {
            path: CYRILJOURNET_data.routes.path,
            name: CYRILJOURNET_data.name,
            type: CYRILJOURNET_data.type,
            typeofLink: CYRILJOURNET_data.routes.typeofLink,
            rep: CYRILJOURNET_data.img.rep,
            cover: CYRILJOURNET_data.img.cover,
            component: CyrilJournet,
        },
        ChezSoiRienQueSoi: {
            path: CSRQS_data.routes.path,
            name: CSRQS_data.name,
            type: CSRQS_data.type,
            typeofLink: CSRQS_data.routes.typeofLink,
            rep: CSRQS_data.img.rep,
            cover: CSRQS_data.img.cover,
            component: ChezSoiRienQueSoi,
        },
        JHV: {
            path: JHV_data.routes.path,
            name: JHV_data.name,
            type: JHV_data.type,
            typeofLink: JHV_data.routes.typeofLink,
            rep: JHV_data.img.rep,
            cover: JHV_data.img.cover,
            component: JeanetteHussVarnet,
        },
        Oldies: {
            path: OLDIES_data.routes.path,
            name: OLDIES_data.name,
            type: OLDIES_data.type,
            typeofLink: OLDIES_data.routes.typeofLink,
            rep: OLDIES_data.img.rep,
            cover: OLDIES_data.img.cover,
            component: Oldies,
        }
    },
    Typographie: {
        Letter: {
            path: '/Letter',
            name: 'Letter',
            rep:'Letter',
            component: Letter,
        },
        Words: {
            path: '/Words',
            name: 'Words',
            rep: 'Words',
            component: Words,
        },
        Number: {
            path: '/Number',
            name: 'Number',
            rep: 'Number',
            component: Words,
        },
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