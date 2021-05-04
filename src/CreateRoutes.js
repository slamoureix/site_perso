import { useEffect, useState } from "react";
import { Route } from "react-router";

export default function CreateRoutes(ObjRoutes) {
    const [ObjectRoutesState] = useState(ObjRoutes);
    const [RouteState, setRouteState]= useState([])

    useEffect(() => {
        const ArrRoutes = [];
    for (let prop of Object.keys(ObjectRoutesState)) {
    let TypeRoute = ObjectRoutesState[prop];
    for (let name of Object.keys(TypeRoute)) {
        let Routes = TypeRoute[name];
        let route = <Route key={Routes.path} exact path={Routes.path} component= {Routes.component} />
        ArrRoutes.push(route);
        }
    }
    setRouteState(ArrRoutes);
    }, [ObjectRoutesState])

    return RouteState;
    }