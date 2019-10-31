const RefreshTime = require("node-arm-refresh-in-time");

class LastValueUpdate extends RefreshTime{
    constructor(callback, frequency){
        super(()=>{
            callback(this.data);
        }, frequency);
        this.data = null;
        
    }
}
module.exports = LastValueUpdate ;