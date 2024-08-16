import express, { Router } from 'express';
import routerMedicines from './routes/medicines.routes.js';

const app = express();
//Settings
app.set("port", 3000) || process.env.PORT;
//Middleware
app.use("/api/pharmacy", routerMedicines)
export default app;

