import htmlToPdf from "./helpers/html-to-pdf.js";
import fs from "fs";

class Application{
    static async main(){

        const path = './src/template.html';
        fs.readFile (path, 'utf-8', async (error, data) => {
            if(error){
                console.log("error al leer html", error);
                return;
            }
            const buffer = await htmlToPdf(data);
        })
          
    }
}

export default Application;