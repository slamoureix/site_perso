import Letter from './Letter';

import { underProject, typographie } from '../../../config';

// iMGS 

import {letter01} from './imgDatas/letter-01';
import {letter02} from './imgDatas/letter-02';
import {letter03} from './imgDatas/letter-03';
import {letter04} from './imgDatas/letter-04';
import {letter05} from './imgDatas/letter-05';
import {letter06} from './imgDatas/letter-06';
import {letter07} from './imgDatas/letter-07';
import {letter08} from './imgDatas/letter-08';
import {letter09} from './imgDatas/letter-09';
import {letter10} from './imgDatas/letter-10';

export const letterData = {
    "routes": {
        "path": "/Letter",
        "typeofLink": underProject,
        "component" : Letter
    },
    "name": "Letter",
    "type": typographie,
    "content": "",
    "outils": "",
    "rep": "Letter",
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
            letter01,
            letter02,
            letter03,
            letter04,
            letter05,
            letter06,
            letter07,
            letter08,
            letter09,
            letter10,
        ]
    }
}