import { Express, Application } from 'express';
import * as bodyParser from 'body-parser';


import { ParseController } from '../controllers/ParseController';
import {IrouteItem} from '../config/route.config';
import HttpTypes from "../config/http-types";

const ClassList = {
    ParseController
}

class RouteGenerator{
    route: IrouteItem;
    app: Application;
    group: string;
    jsonParser: any;

    constructor(Route: IrouteItem, App: Application, Group: string){
        this.route = Route;
        this.app = App;
        this.group = Group;
        this.jsonParser = bodyParser.json()
        this.precheck();
    }

    precheck(){
        const method:string = this.route.HTTP_TYPE;
        switch(method){
            case HttpTypes.POST:{
                this.createPost();
                break;
            }
        }
    }

    createPost(){
        const controllerClass: any = ClassList.ParseController;
        console.log(`${this.group}/${this.route.HTTP_PATH}`)
        this.app.post(`/${this.group}/${this.route.HTTP_PATH}`, this.jsonParser, new controllerClass()[this.route.HTTP_CONTROLLER_METHOD].bind(this))
    }
}

export default RouteGenerator;