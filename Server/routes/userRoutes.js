import express from 'express';
import { fetch,create,update,deleteuser, getOneUser } from '../controller/userController.js';




const route = express.Router();

route.post('/create', create);
route.get('/fetch', fetch);
route.get("/getAllUsers", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteuser);
route.get("/getOneUser/:id", getOneUser);


export default route;