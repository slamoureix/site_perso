import {modishData} from '../pages/UxUi/Modish/data';
import {moderneData} from '../pages/UxUi/Moderne/data';
import {oceanForLifeData} from '../pages/UxUi/OceanForLife/data';

export const UxUiRoutes = {
    UxUi: {
        Modish: {
            path: modishData.routes.path,
            name: modishData.name,
            component: modishData.routes.component,
            rep: modishData.rep,
            typeofLink: modishData.routes.typeofLink,
        },
        Moderne: {
            path: moderneData.routes.path,
            name: moderneData.name,
            component: moderneData.routes.component,
            rep: moderneData.rep,
            typeofLink: moderneData.routes.typeofLink,
        },
        OceanForLife: {
            path: oceanForLifeData.routes.path,
            name: oceanForLifeData.name,
            component: oceanForLifeData.routes.component,
            rep: oceanForLifeData.rep,
            typeofLink: oceanForLifeData.routes.typeofLink,
        },
    },
}

export default function RoutesReducer(state = UxUiRoutes) {
    return state;
}