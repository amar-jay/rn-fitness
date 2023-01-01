import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserController,
  updateUserController,
} from "./controllers/users.controller";

const router = express.Router();

//router.get("/users", createUserController);
router.get("/users/all", getAllUsersController);
router.get("/users/create", createUserController);
router.get("/users/update/:id", updateUserController);
router.get("/users/:id", getUserController);

export default router;
