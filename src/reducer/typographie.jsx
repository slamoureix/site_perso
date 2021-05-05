import Letter from '../pages/Typographie/Letter/Letter';
import Words from '../pages/Typographie/Words/Words';
import Numbers from '../pages/Typographie/Number/Number';

import LetterData from '../pages/Typographie/Letter/data';
import WordsData from '../pages/Typographie/Words/data';
import NumbersData from '../pages/Typographie/Number/data';

export const TypoRoutes = {
    Typographie: {
        Letter: {
            path: LetterData.routes.path,
            name: LetterData.name,
            component: Letter,
            rep: LetterData.rep,
            typeofLink: LetterData.routes.typeofLink,
        },
        Words: {
            path: WordsData.routes.path,
            name: WordsData.name,
            component: Words,
            rep: WordsData.rep,
            typeofLink: WordsData.routes.typeofLink,
        },
        Number: {
            path: NumbersData.routes.path,
            name: NumbersData.name,
            component: Numbers,
            rep: NumbersData.rep,
            typeofLink: NumbersData.routes.typeofLink,
        },
    },
}


export default function RoutesReducer(state = TypoRoutes) {
    return state;
}