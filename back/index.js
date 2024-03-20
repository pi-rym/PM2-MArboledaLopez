const app = require ("./src/server.js");
const dbCon = require ("./src/config/dbCon.js");

dbCon().then(
    (res) =>{
        app.listen (3000, ()=>{
            console.log("Servidor escuchando puerto 3000.");
        });
    }
)