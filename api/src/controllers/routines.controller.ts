// User controller

import { Request, Response } from "express";
import { getAllRoutines, getRoutine, updateRoutine } from "../repositories";

export const getAllExercisesInRoutineCtrl = async (
  req: Request,
  res: Response
) => {
  res.status(201).json({ messsage: "Unimplemented" });
};

export const getAllRoutinesCtrl = async (req: Request, res: Response) => {
  const users = await getAllRoutines();
  res.status(200).json(users);
};

export const createRoutineCtrl = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const uid = parseInt(id);
    const user = await getRoutine(uid);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

export const updateRoutineCtrl = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = JSON.parse(req.body.toString());
    const uid = parseInt(id);
    const user = await updateRoutine(uid, body);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: "Invalid ID or body" });
  }
};
