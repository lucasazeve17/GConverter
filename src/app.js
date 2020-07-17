const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PdfWriter = require('./PDFWriter')

const reader = new Reader()
const writer = new Writer()

async function main(){
    const data = await reader.Read('./users.csv')
    const processData = Processor.Process(data)
    
    const users = new Table(processData)
    
    let html = await HtmlParser.Parse(users)
    
    writer.Write(`./html/${Date.now()}.html`,html) 
    PdfWriter.WritePdf(`./pdf/${Date.now()}.pdf`,html)
}

main()