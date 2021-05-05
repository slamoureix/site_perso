import Letter_data from './Letter/data';


const Typo_data = {
    routes: {
        path: "/Typographie",
        typeofLink: "project"
    },
    name: "Typographie",
    type: "Typographie",
    year: "",
    content: "Illustrator - Photoshop",
    skills: "Illustrator - Photoshop",
    rep: "Typographie",
    img: {
        rep: "Typographie",
        cover: {
            src_default: {
                name: "interieur_6621_xxl",
                format: "webp"
            },
            sources: [{
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
            alt: "interieur du portfolio"
        },
    },

    "underProject" : {
        Letter_data : Letter_data,
    }
}

export default Typo_data;