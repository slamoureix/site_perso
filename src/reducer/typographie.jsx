
import Letter from '../pages/Typographie/Letter/Letter';
import Words from '../pages/Typographie/Words/Words';


export const TypoRoutes = {
    Typographie: {
        Letter: {
            path: '/Letter',
            name: 'Letter',
            component: Letter,
            rep: 'Letter',
        },
        Words: {
            path: '/Words',
            name: 'Words',
            component: Words,
            rep: 'Words',
        },
        Number: {
            path: '/Number',
            name: 'Number',
            component: Words,
            rep: 'Number',
        },
    },
}


export default function RoutesReducer(state = TypoRoutes) {
    return state;
}