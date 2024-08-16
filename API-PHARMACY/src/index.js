import app from "./app.js";
import "./database.js"

app.get("/getAll", (req, res) =>{
    res.json({message:"Hola, Soy Yair"})
} )
app.listen(app.get("port"), () => {
    console.log("Servidor sobre el puerto", app.get("port"));  
});

