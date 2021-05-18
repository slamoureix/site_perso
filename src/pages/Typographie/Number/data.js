import Number from './Number';
import { underProject, typographie, project } from '../../../config';

// iMGS 

import {number1} from './imgDatas/number1';
import {number2} from './imgDatas/number2';
import {number3} from './imgDatas/number3';
import {number4} from './imgDatas/number4';
import {number5} from './imgDatas/number5';

export const numberData = {
    "routes": {
        "path": "/Number",
        "typeofLink": project,
        "component" : Number
    },
    "name": "Number",
    "type": typographie,
    "rep": "Number",
    "img": {
        "cover": number1,
        "content": [
            number1,
            number2,
            number3,
            number4,
            number5,
        ]
    }
}