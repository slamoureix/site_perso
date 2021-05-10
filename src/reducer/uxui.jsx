import ModishData from '../pages/UxUi/Modish/data';
import ModerneData from '../pages/UxUi/Moderne/data';
import OceanForLifeData from '../pages/UxUi/OceanForLife/data';



export const UxUiRoutes = {
    UxUi: {
        Modish: {
            path: ModishData.routes.path,
            name: ModishData.name,
            component: ModishData.routes.component,
            rep: ModishData.rep,
            typeofLink: ModishData.routes.typeofLink,
        },
        Moderne: {
            path: ModerneData.routes.path,
            name: ModerneData.name,
            component: ModerneData.routes.component,
            rep: ModerneData.rep,
            typeofLink: ModerneData.routes.typeofLink,
        },
        OceanForLife: {
            path: OceanForLifeData.routes.path,
            name: OceanForLifeData.name,
            component: OceanForLifeData.routes.component,
            rep: OceanForLifeData.rep,
            typeofLink: OceanForLifeData.routes.typeofLink,
        },
    },
}

export default function RoutesReducer(state = UxUiRoutes) {
    return state;
}