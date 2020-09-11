import express = require('express');
import {Express, Application } from "express";

// import path from "path";
import {Routes} from './config/route.config';
import RouteGenerator from "./http/route-generator";

class Bootstrap{

    app: Application;
    port: number;

    constructor(){
        this.app = express();
        this.port = 8080;
        this.initialize();
    }

    initialize(){
        Routes.forEach((Route)=>{
            const group: string = Route.group;
            Route.routes.forEach((routeItem)=>{
                 try{
                    const routeGenerator:RouteGenerator = new RouteGenerator(routeItem, this.app, group);
                 }catch(e){
                     console.log(`Unable to load route ${routeItem.HTTP_ROUTE_LABEL}`)
                 }
            })
        });
        this.app.listen( this.port, () => {
            const post = this.app._router.stack.filter((r: { route: { methods: { post: any; }; }; }) => r.route && r.route.methods.post).map((r: { route: { path: any; }; }) => r.route.path);
            console.log(`Registered Post Methods:`);
            console.log(post);
            console.log( `server started at http://localhost:${ this.port }` );
        } );
    }

}
new Bootstrap();
