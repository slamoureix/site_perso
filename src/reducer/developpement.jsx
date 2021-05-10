import {yourLookIsGoodData} from './../pages/Developpement/YourLookIsGood/data';

export const devRoutes = {
    Developpement: {
            YourLookIsGood: {
                path:yourLookIsGoodData.routes.path,
                name: yourLookIsGoodData.name,
                component: yourLookIsGoodData.routes.component,
                rep: yourLookIsGoodData.rep,
                typeofLink: yourLookIsGoodData.routes.typeofLink,
            },
        }
}


export default function RoutesReducer(state = devRoutes) {
    return state;
}