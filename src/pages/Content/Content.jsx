import React, { useEffect} from 'react'

import Typographie from '../Typographie/Typographie'
import Developement from '../Developpement/Developpement'
import UxUi from '../UxUi/UxUi'
import {AddHoverEffectOnLink} from './script'

import './_Content.scss'

export default function Content() {
    useEffect(() => {AddHoverEffectOnLink()}, [])

    return (
        <article id="projet">
            <header><h1> Mes Projets</h1></header>
            <Developement/>
            <Typographie/>
            <UxUi/>
        </article>
    )
}

