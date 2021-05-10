import {project, typographie } from './../../config'

import cover from './imgDatas/cover'
import Typographie from './Typographie'

export const typoData = {
    routes: {
        path: "/Typographie",
        typeofLink: project,
        component: Typographie
    },
    name: "Typographie",
    type: typographie,
    skills: "Illustrator - Photoshop",
    rep: "Typographie",
    img: {
        cover: cover,
    }
}