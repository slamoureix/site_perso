import { useEffect, useState } from "react";
import { Route } from "react-router";


export const CreateRoutes = (ObjRoutesGlobal) => {
    
    const [RouteState, setRouteState]= useState([])

    useEffect(() => {
        const ArrRoutes = [];
        for (let AllRoutes of Object.keys(ObjRoutesGlobal)) {
            const Routes = ObjRoutesGlobal[AllRoutes];
                for (let route of Object.keys(Routes)) {
                    let oneRoute = Routes[route];
                        for (let name of Object.keys(oneRoute)){
                            let r = oneRoute[name];
                            // exact permet de matcher avec le string exact
                            
                            let jsxRoute = <Route key={r.path} exact path={r.path} component= {r.component} />
                            ArrRoutes.push(jsxRoute);
                        }
                    
                }
        }

    setRouteState(ArrRoutes);

    }, [])

    return RouteState;
    }