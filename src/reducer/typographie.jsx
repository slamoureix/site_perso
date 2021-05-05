
import Letter from '../pages/Typographie/Letter/Letter';
import Words from '../pages/Typographie/Words/Words';

import LetterData from '../pages/Typographie/Letter/data';

export const TypoRoutes = {
    Typographie: {
        Letter: {
            path: LetterData.routes.path,
            name: LetterData.name,
            component: Letter,
            rep: LetterData.rep,
            "typeofLink": LetterData.routes.typeofLink,
        },
        Words: {
            path: '/Words',
            name: 'Words',
            component: Words,
            rep: 'Words',
            "typeofLink": "underProject",
        },
        Number: {
            path: '/Number',
            name: 'Number',
            component: Words,
            rep: 'Number',
            "typeofLink": "underProject",
        },
    },
}


export default function RoutesReducer(state = TypoRoutes) {
    return state;
}