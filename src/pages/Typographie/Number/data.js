import Number from './Number';
import { underProject, typographie } from '../../../config';

// iMGS 

import {number1} from './imgDatas/number1';
import {number2} from './imgDatas/number2';
import {number3} from './imgDatas/number3';
import {number4} from './imgDatas/number4';
import {number5} from './imgDatas/number5';

export const numberData = {
    "routes": {
        "path": "/Number",
        "typeofLink": underProject,
        "component" : Number
    },
    "name": "Number",
    "type": typographie,
    "rep": "Number",
    "img": {
        "cover": {
            "src_default": {
                name: "interieur_6621_xxl",
                format: "webp"
            },
            "sources": [{
                    "src": {
                        name: "interieur_6621_xs",
                        format: "webp"
                    },
                    "media": "(max-width: 576px)"
                },
                {
                    "src": {
                        name: "interieur_6621_md",
                        format: "webp"
                    },
                    "media": "(min-width: 577px) and (max-width: 768px)"
                },
                {
                    "src": {
                        name: "interieur_6621_lg",
                        format: "webp"
                    },
                    "media": "(min-width 769px) and (max-width: 1024px)"
                },
                {
                    "src": {
                        name: "interieur_6621_xl",
                        format: "webp"
                    },
                    "media": "(min-width 1025px) and (max-width: 1280px)"
                },
                {
                    "src": {
                        name: "interieur_6621_xxl",
                        format: "webp"
                    },
                    "media": "(min-width 1281px)"
                }
            ],
            "alt": "interieur du portfolio"
        },
        "content": [
            number1,
            number2,
            number3,
            number4,
            number5,
        ]
    }
}