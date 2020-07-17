const pdf = require('html-pdf')

class PdfWriter{

    static WritePdf(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{console.log('Erro: ' + err)})
    }
}


module.exports = PdfWriter