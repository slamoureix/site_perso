import React, { useEffect, useRef, useState } from 'react';
import {CreateSrc} from './CreateSrc';
import uuid from 'react-native-uuid';

/**
 * associate dynamically attribute src.
 * @param {String} rep : name of the field project
 * @param {String} src_default : default src of the img
 * @param {String} sources : sources of the file format
 * @param {String} alt : alt of the file format
 */
export default function CreatePicture(rep, src_default, sources, alt) {
    const ref = useRef();

    /* SOURCES */ 
    const [DataSourceState, setDataSourceState] = useState(); // undefined vaut false lors d'un test bol
    const [temporaryImportSources, setTemorarySources] = useState()
    
    /* pour src_default */
    const [SrcState, SrcSetstate] = useState('');

    useEffect(() => {

            const fetchSrc_default = () => {
                CreateSrc(src_default.name, src_default.format, rep).then(value => (SrcSetstate(value.default)));
            }
    
            const AllSources = (Sources) => {
            // On vient map le tableau de data sources afin de créer pour chaque element un nouveau tableau avec les promesses.
            let importSources = Sources.map(element => CreateSrc(element.src.name, element.src.format, rep).then(v => v.default));
            // Permet de ressoudre toutes les promesses dans l'Array de promesse.
            Promise.all(importSources).then(value => setTemorarySources(value)) // -> on ajoute le tableau au state Temporaire
            }
    
            const fusionToArray = (InitSources, Temporary) => {
            let CompletedSources = [];
            for (let index = 0; index < InitSources.length; index++) {
                CompletedSources.push({
                    ...InitSources[index],
                    'srcset': Temporary[index]
                })
            }
            setDataSourceState(CompletedSources);
            }
            
            temporaryImportSources ? fusionToArray(sources, temporaryImportSources) : AllSources(sources)
            fetchSrc_default();
        }, [rep, sources, src_default.format, src_default.name, temporaryImportSources])

    
    return (
        <picture>
                {temporaryImportSources ? (DataSourceState ? DataSourceState.map(s => <source key={uuid.v4()} srcSet={s.srcset} media={s.media} />) : null ) : null}
                <img ref={ref} className="img" loading="lazy" src={SrcState} alt= {alt}  />
                {console.log('create')}
        </picture>
    )
}

