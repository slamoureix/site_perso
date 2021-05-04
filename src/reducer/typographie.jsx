import Letter from '../pages/Typographie/Letter/Letter';
import Words from '../pages/Typographie/Words/Words';


export const TypoRoutes = {
    Typographie: {
        Letter: {
            path: '/Letter',
            name: 'Letter',
            rep: 'Letter',
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
    Admin: {
        Error: {
            path: '',
            name: 'Erreur',
            component: Error,
        }
    },
}


export default function RoutesReducer(state = TypoRoutes) {
    return state;
}