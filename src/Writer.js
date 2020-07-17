const fs = require('fs')
const { promisify } = require('util')


class Writer{

    constructor(){
        this.writer = promisify(fs.writeFile)
    }

    async Write(filepath,html){
        try {
             await this.writer(filepath,html)
             return true
        } catch (error) {
            return false
        }
    }
}


module.exports = Writer