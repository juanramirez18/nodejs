import { Request, Response,  } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { constants } from "crypto";

//creando instancia de prisma
const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados: ", allUsers)
        res.json(allUsers)
        
    } catch (error) {
        res.status(300).json(error)
        
    }
   


}

const getAllUsersById = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados: ", allUsers)
        res.json(allUsers)
        
    } catch (error) {
        res.status(300).json(error)
        
    }
   


}

const createNewUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados: ", allUsers)
        res.json(allUsers)
        
    } catch (error) {
        res.status(300).json(error)
        
    }
   


}

const updateUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados: ", allUsers)
        res.json(allUsers)
        
    } catch (error) {
        res.status(300).json(error)
        
    }
   


}
const deleteUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados: ", allUsers)
        res.json(allUsers)
        
    } catch (error) {
        res.status(300).json(error)
        
    }
   


}

export{
    getAllUsers,
    getAllUsersById, 
    createNewUser, 
    updateUsers, 
    deleteUsers
}