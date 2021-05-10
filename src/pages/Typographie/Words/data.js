import Words from './Words';
import {img} from './imgDatas';

import {underProject, typographie } from '../../../config';

export const wordsData = {
    routes: {
        path: "/Words",
        typeofLink: underProject,
        component: Words
    },
    name: "Words",
    type: typographie,
    content: "",
    outils: "",
    rep: "Words",
    img: img
}