// COMPONENTS //

import Content from '../pages/Content/Content';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';
import Error from '../pages/404/404';
import Number from '../pages/Number/Number';
import Ylig from '../pages/Ylig/Ylig';
import Landscape from '../pages/Landscape/Landscape';
import CyrilJournet from '../pages/CyrilJournet/CyrilJournet';
import ChezSoiRienQueSoi from '../pages/ChezSoiRienQueSoi/ChezSoiRienQueSoi'
import JeanetteHussVarnet from '../pages/JHV/JeanetteHussVarnet'
import Oldies from '../pages/Oldies/Oldies';

// DATAS //
import JHV_data from '../assets/JH--V/data';

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
            path: '/Ylig',
            name: 'Your Look Is Good',
            typeofLink: 'project',
            cover: JHV_data[0].img.cover, // modif avec les vrais datas //
            component: Ylig,
        },
        Number: {
            path: '/Number',
            name: 'Number',
            typeofLink: 'project',
            cover: JHV_data[0].img.cover,
            component: Number,
        },
        Landscape: {
            path: '/Landscape',
            name: 'Landscape',
            typeofLink: 'project',
            cover: JHV_data[0].img.cover,
            component: Landscape,
        },
        CyrilJournet: {
            path: '/CyrilJournet',
            name: 'Cyril Journet',
            cover: JHV_data[0].img.cover,
            typeofLink: 'project',
            component: CyrilJournet,
        },
        ChezSoiRienQueSoi: {
            path: '/ChezSoiRienQueSoi',
            name: 'Chez Soi Rien Que Soi',
            typeofLink: 'project',
            cover: JHV_data[0].img.cover,
            component: ChezSoiRienQueSoi,
        },
        JHV: {
            path: JHV_data[0].routes.path,
            name: JHV_data[0].name,
            type: JHV_data[0].type,
            typeofLink: JHV_data[0].routes.typeofLink,
            cover: JHV_data[0].img.cover,
            component: JeanetteHussVarnet,
        },
        Oldies: {
            path: '/Oldies',
            name: 'Oldies',
            typeofLink: 'project',
            cover: JHV_data[0].img.cover,
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