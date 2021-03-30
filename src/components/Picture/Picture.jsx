import React, { useEffect, useState } from 'react';

export default function Picture({rep, src_default, sources, alt}) {
    /* SOURCES */ 
    const [DataSourceState, setDataSourceState] = useState();
    const [temporaryImportSources, setTemorarySources] = useState()
    
    /* pour src_default */
    const [SrcState, SrcSetstate] = useState('');

    const CreateSrcset = (name, format, repertory) => {
        return import(`../../assets/${repertory}/Img/${name}.${format}`)
    }

    const fetchSrc_default = () => {
        CreateSrcset(src_default.name, src_default.format, rep)
        .then(value => (SrcSetstate(value.default)));
    }

    const AllSources = (Sources) => {
        // On vient map le tableau de data sources afin de créer pour chaque element  un nouveau tableau avec les promesses.
        let importSources = Sources.map(element => CreateSrcset(element.src.name, element.src.format, rep).then(v => v.default));
        // Permet de ressoudre toutes les promesses dans l'Array de promesse.
        Promise.all(importSources).then(value => {
            setTemorarySources(value) // -> on ajoute le tableau au state Temporaire
        })
    }
    
    const fusionToArray = (InitSources, Temporary) => {
        let CompletedSources = [];
        for (let index = 0; index < InitSources.length; index++) {
            let element = InitSources[index];
            element = {...element, 'srcset' : Temporary[index]}
            CompletedSources.push(element)
        }
        setDataSourceState(CompletedSources);
    }
    
    useEffect(() => {
            temporaryImportSources ? fusionToArray(sources, temporaryImportSources) : AllSources(sources)
            fetchSrc_default();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [temporaryImportSources])



    return (
            <picture>
                {temporaryImportSources ? (DataSourceState ? DataSourceState.map(source => <source key= {source.src.name} srcSet= {source.srcset} media= {source.media} />) : null ) : null}
                <img src={SrcState} alt = {alt} />
            </picture>
    )
}
