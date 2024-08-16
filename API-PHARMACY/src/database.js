import mongoose from "mongoose"

mongoose.connect("mongodb+srv://210336:vIeQDNdd7JuRVjdT@cluster0.icgmu6a.mongodb.net/pharmacy_db?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err));