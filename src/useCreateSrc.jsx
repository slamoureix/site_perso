import { useEffect } from "react";

/**
 * associate dynamically attribute src.
 * @param {String} rep : name of the field project
 * @param {String} name : name of the file
 * @param {String} format : name of the file format
 * @param {HTMLElement} refImg : ref to the element 
 */
export default function useCreateSrc(rep = '', name='', format='', refImg='') {
        import(`../../assets/${rep}/Img/${name}.${format}`)
            .then(value => (
                refImg.current.setAttribute("src", `${value.default}`)))
}
