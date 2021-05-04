import Letter from '../pages/Typography/letter/letter';
import Words from '../pages/Typography/words/words';


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