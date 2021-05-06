import Words from './Words';

const WordsData = {
    "routes": {
        "path": "/Words",
        "typeofLink": "underProject",
        "component": Words
    },
    "name": "Words",
    "type": "typographie",
    "content": "",
    "outils": "",
    "rep": "Words",
    "img": {
        "cover": {
            "src_default": {
                name: "J5_construire_md",
                format: "jpg"
            },
            "sources": [{
                    "src": {
                        name: "J5_construire_xs",
                        format: "webp"
                    },
                    "media": "(max-width: 576px)"
                },
                {
                    "src": {
                        name: "J5_construire_md",
                        format: "webp"
                    },
                    "media": "(min-width: 577px) and (max-width: 768px)"
                }
            ],
            "alt": "interieur du portfolio"
        },
        "content": [
            {
                "src_default": {
                    name: "J5_construire_md",
                    format: "jpg"
                },
                "sources": [{
                        "src": {
                            name: "J5_construire_xs",
                            format: "webp"
                        },
                        "media": "(max-width: 576px)"
                    }, {
                        "src": {
                            name: "J5_construire_md",
                            format: "webp"
                        },
                        "media": "(min-width: 577px) and (max-width: 768px)"
                    },
                ],
                "alt": "interieur du portfolio"
            },
        ]
    }
}

export default WordsData;