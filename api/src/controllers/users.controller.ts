// User controller

import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../repositories";

export const createUserCtrl = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
};

export const getAllUsersCtrl = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

export const getUserCtrl = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const uid = parseInt(id);
    const user = await getUser(uid);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

export const updateUserCtrl = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = JSON.parse(req.body.toString());
    const uid = parseInt(id);
    const user = await updateUser(uid, body);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: "Invalid ID or body" });
  }
};

export const deleteUserCtrl = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const uid = parseInt(id);
    const user = await deleteUser(uid);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: "Invalid ID" });
  }
};
