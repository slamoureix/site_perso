

/**
 * associate dynamically attribute src.
 * @param {String} repertory: name of the field project
 * @param {String} name : name of the file
 * @param {String} format : name of the file format
 */
export default function useCreateSrc(repertory, name, format, test = null) {
        if (test == null) {
        console.log('test', test)
            return 
        } else {
            console.log('else')
            // return import(`../../assets/${repertory}/Img/${name}.${format}`)
        }
}