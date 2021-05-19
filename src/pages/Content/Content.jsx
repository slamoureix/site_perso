import React, { useEffect, useState } from 'react'

import Typographie from '../Typographie/Typographie'
import Developement from '../Developpement/Developpement'
import UxUi from '../UxUi/UxUi'
import {AddHoverEffectOnLink} from './script'

import './_Content.scss'

export default function Content() {

    const [inProp, setInProp] = useState(false)


    useEffect(() => {AddHoverEffectOnLink()}, [])

    return (
        <div id="projet">
            <Developement/>
            <Typographie/>
            <UxUi/>
        </div>
    )
}

