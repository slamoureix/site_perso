import {project, webdesign} from '../../config';

const UxUiData = {
    "routes": {
        "path": "/UxUi",
        "typeofLink": project
    },
    "name": "UX - UI",
    "type": webdesign,
    "content": "lorem",
    "rep": "UxUi",

    "img": {
        "rep": "UxUi",
        "cover": {
            "src_default": {
                name: "beauty",
                format: "gif"
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
        }
    }
}

export default UxUiData;