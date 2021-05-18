import React, { useEffect } from 'react';

import './_Content.scss';
import Typographie from '../Typographie/Typographie';
import Developement from '../Developpement/Developpement';
import UxUi from '../UxUi/UxUi';
import {
    AddHoverEffectOnLink
} from './script';

export default function Content() {


    useEffect(() => {
        AddHoverEffectOnLink();
    }, [])

    return (
        <div id="projet">
            <Developement/>
            <Typographie/>
            <UxUi/>
        </div>
    )
}

