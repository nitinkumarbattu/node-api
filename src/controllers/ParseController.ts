import DataParser from "../utilities/DataParser";

interface IParse{
    parseData: Function,
    trimParseData: Function
}

class ParseController<T>{
    constructor(){
        console.log("initialized")
    }

    public parseData(req:any, res:any){
        try{
            const {
                data
            } = req.body;
            const dataParser: DataParser = new DataParser();
            res.send(dataParser.parseString(data))
        }catch(e){
            res.sendStatus(500)
        }
    }

    public trimParseData(req:any, res:any){
        try{
            const {
                data
            } = req.body;
            const dataParser: DataParser = new DataParser();
            res.send(dataParser.trimData(data))
        }catch(e){
            res.sendStatus(500)
        }
    }
}

export {
    IParse,
    ParseController
};