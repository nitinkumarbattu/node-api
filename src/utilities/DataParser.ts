class DataParser {
    public parseString(query: string){
        const obj ={firstName: "", lastName: "", clientId: ""};
        let temp = [];
        let foundsplit = false;
        let splitend = false;
        for (let a = 0; a < query.length; a++) {
            if (query[a + 1] === "0" || typeof query[a + 1] === "undefined") {
                foundsplit = true;
            }
            temp.push(query[a]);
            if (foundsplit && (query[a + 1] !== "0" || typeof query[a + 1] === "undefined")) {
                foundsplit = false;
                splitend = true;
            }
            if (!foundsplit && splitend) {
                if (!obj.firstName) {
                    obj.firstName = temp.join("");
                } else if (!obj.lastName) {
                    obj.lastName = temp.join("");
                } else if (!obj.clientId) {
                    obj.clientId = temp.join("");
                }
                temp = [];
                foundsplit = false;
                splitend = false;
            }
        }
        return obj;
    }

    public trimData(query:string){
        const obj = this.parseString(query);
        obj.firstName = obj.firstName.split("0").join("");
        obj.lastName = obj.lastName.split("0").join("");
        obj.clientId = this.insert(obj.clientId, "-", 3);
        return obj;
    }

    private insert(text: string, insertText: string, position: number): string {
        if (position > text.length) {
            return text;
        }
        insertText = insertText || "";
        return text.slice(0, position) + insertText + text.slice(position);
    }
}

export default DataParser;