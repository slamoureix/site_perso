import React, { useEffect, useState } from 'react';

export default function Picture({rep, src_default, source, alt}) {

    /* pour src_default */
    const [SrcState, SrcSetstate] = useState('');

    useEffect(() => {
        const fetchSrc_default = async () => {
            await import(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`)
                .then(value => (SrcSetstate(value.default)));
        }
        fetchSrc_default();
    }, [] )

    /* SOURCES */ 

    // fonctionne avec require ->
    // const OnTakeSources = () => {
    //     let arrSources = [];
    //     for (let name of Object.keys(source)) {
    //         let S = source[name];
    //         let baliseSource = <source key= {name} srcSet= {require(`../../assets/${rep}/Img/${S.src.name}.${S.src.format}`).default} media= {S.media} />;
    //         arrSources.push(baliseSource);
    //     }
    //     return arrSources;
    // }

        const [SourceState, setSourceState] = useState([]);

        const importSource = async (element) => {
            let imp = await import(`../../assets/${rep}/Img/${element.src.name}.${element.src.format}`)
            return imp;
        }

        useEffect(() => {
            const fetchSource = async () => {
                source.map(element => 
                    importSource(element)
                    .then(v => { element = {...element, 'SRC' : v.default};
                        setSourceState(() => {
                            return {...SourceState, element}}
                            )
                        }
                    )
                )
            }
            
            fetchSource() 
        }, [])
        
    //instancier un objet c
    // class Source {
    //     constructor(key, name, format, media) {
    //         this.key = key;
    //         this.name = name;
    //         this.format = format;
    //         this.media = media
    //     }
    // }
    
    // const OnLoadSources = () => {
    //     const data_sources = [];
        
    //     for(let name of Object.keys(source)){
    //         let S = source[name];
    //         let So = new Source(name, S.src.name, S.src.format, S.media);
    //         let imp = [];
    //         import(`../../assets/${rep}/Img/${S.src.name}.${S.src.format}`).then(v => imp.push(v.default));
    //         let fullSRC = {...So, 'srcset' : imp}
    //         console.log(imp)
    //         data_sources.push(fullSRC);
    //     }

    //     let sources = []
    //     console.log(data_sources.srcset)
    //     data_sources.forEach(({key, name, media, srcset}) => {
    //             let s = <source id= {key} key= {name} media={media} srcSet={srcset} />
    //             sources.push(s)})
        
    //     return sources
    // }
    
    


    
    // const OnTakeSources = () => {
    //     let arrSources = [];
    //     for (let name of Object.keys(source)) {
    //         let srcset= []
    //         let S = source[name];
    //         import(`../../assets/${rep}/Img/${S.src.name}.${S.src.format}`).then(
    //             value => {
    //                 srcset.push(value.default)
    //             });
    //         let baliseSource = <source key= {name} srcSet= {srcset} media= {S.media} />;
    //         arrSources.push(baliseSource);
    //     }
    //     return arrSources;
    // }


    return (
            <picture>
                {/* {OnTakeSources()} */}
                {/* {OnLoadSources()} */}
                
                
                    
                        

                
                
                    
                <img src={SrcState} alt = {alt} />
            </picture>
    )
}


/* 
-> Use State
// [SrcState , SrcSetstate] = UseState()
// import(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`)
//     .then(value => ( SrcSetstate(value.default)));
// 

-> Avec un UseRef sur l'élèment (const refImg = useRef())

// import(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`)
// .then(value => (
//     refImg.current.setAttribute("src", `${value.default}`)))

- > fonctionne avec require

// let R = require(`../../assets/${rep}/Img/${src_default.name}.${src_default.format}`).default
// {<img src={R} alt = {alt} /> }

*/