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

app.use("/api", router)
