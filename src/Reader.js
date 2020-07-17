const fs = require('fs')
const {promisify} = require('util')


class Reader {
    constructor() {
        this.read = promisify(fs.readFile)
    }
    async Read(filepath) {
        return await this.read(filepath,{encoding:'utf-8'})
    }

}

module.exports = Reader