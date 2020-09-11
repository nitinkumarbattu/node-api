import {IParse, ParseController} from "../controllers/ParseController";
import HttpTypes from "./http-types";

interface IrouteItem {
    HTTP_TYPE: string,
    HTTP_CONTROLLER: string,
    HTTP_CONTROLLER_METHOD: string,
    HTTP_ROUTE_LABEL: string,
    HTTP_PATH: string,
}

interface IgroupItem {
    group: string,
    routes: IrouteItem[]
}


const Routes: IgroupItem[] = [
    {
        group: 'v1',
        routes: [
            {
                HTTP_TYPE: HttpTypes.POST,
                HTTP_CONTROLLER: "ParseController",
                HTTP_CONTROLLER_METHOD: "parseData",
                HTTP_ROUTE_LABEL: "parse",
                HTTP_PATH: "parse",
            }
        ]
    },
    {
        group: 'v2',
        routes: [
            {
                HTTP_TYPE: HttpTypes.POST,
                HTTP_CONTROLLER: "ParseController",
                HTTP_CONTROLLER_METHOD: "trimParseData",
                HTTP_ROUTE_LABEL: "trimParseData",
                HTTP_PATH: "parse",
            }
        ]
    }
]

export {
    Routes,
    IgroupItem,
    IrouteItem
}