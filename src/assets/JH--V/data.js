const JHV_data = {
    "routes": {
        "path": "/JeanetteHussVarnet",
        "typeofLink": "project"
    },
    "name": "Jeanette Huss--Varnet",
    "type": "édition",
    "format": "A4",
    "content": "Création graphique du portfolio de l’artiste Jeannette Huss––Varnet.",
    "photographies": "Marcel Huss",
    "img": {
        "rep": "JH--V",
        "cover": {
            "src_default": {
                name : "interieur_litlle_size",
                format : "webp"
            },
            // "src_default": import("../../assets/JH--V/Img/01.jpg").then(value => value.default),
            "source": {
                "medium": {
                    "src": {
                        name: "cicrcle",
                        format: "svg"
                    },
                    "media": "(max-width: 600px)"
                },
                "large": {
                    "src": {
                        name: "01",
                        format: "jpg"
                    },
                    "media": "(min-width: 600px) and (max-width: 900px)"
                },
            },
            "alt": "ma belle image est jolie"
        },
    }
}

export default JHV_data;

