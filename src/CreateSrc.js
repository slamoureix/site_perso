
/**
 * permet de créer un import dynamique d'une Imgage.
 * @param {String} name : name of the field project
 * @param {String} format : format of the img
 * @param {String} repertory : repertory of the format
 */
export default function CreateSrc(name, format, repertory) {
    return import(`./assets/${repertory}/Img/${name}.${format}`)
}

/*
const CreateSrcset = (name, format, repertory) => {
    return import(`./assets/${repertory}/Img/${name}.${format}`)
}
*/