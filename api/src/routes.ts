import express from "express";
import {
  createUserCtrl,
  getAllUsersCtrl,
  getUserCtrl,
  updateUserCtrl,
} from "./controllers";

const router = express.Router();

//router.get("/users", createUserCtrl);
router.get("/users/all", getAllUsersCtrl);
router.get("/users/create", createUserCtrl);
router.get("/users/update/:id", updateUserCtrl);
router.get("/users/:id", getUserCtrl);

export default router;
