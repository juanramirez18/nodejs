import * as express from 'express';

//importar controladores
import { getAllUsers, getAllUsersById, createNewUser, updateUsers, deleteUsers } from '../../controllers/usuarios';



const router = express.Router();
router.get("/", getAllUsers); //get all users
router.get("/:id", getAllUsersById); // get user by id
router.post("/", createNewUser); // create new user
router.put("/:id", updateUsers); //update specific user
router.delete("/:id", deleteUsers); //delete specific user

export default router