import * as express from 'express';
import router from './routes';
import mongoose from 'mongoose'
import { PrismaClient } from '@prisma/client'

//conectarnos con la BD
let connString : string = process.env.DATABASE_URL ?? "";
mongoose.connect(connString).then(()=> console.log("Se ha conectado a la BD")).catch(()=> console.log("No se ha podido conectar a la BD") )

//Crear nueva instacia de prisma
const prisma = new PrismaClient()

//Crear nueva instancia de Express

const app = express();

//Agregar un middleware para manejar los JSON
app.use(express.json())

//Agregar un middleware para manejo de errores
// app.use(error: Error, req: Request, res: Response)

app.use("/api", router)
app.listen(3000, () => {
    console.log("servidor de node iniciado en el puerto 3000")
})
