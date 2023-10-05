import htmlToPdf from "./helpers/html-to-pdf.js";

class Application{
    static async main(){
        const buffer = await htmlToPdf('<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>Etiqueta h1</h1><h2>Aqui etiqueta h2222</h2></body></html>');  
    }
}

export default Application;