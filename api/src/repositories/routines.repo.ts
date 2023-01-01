import { Routine } from "@prisma/client";
import { prisma } from "./init";

export const createRoutine = async (user: Routine) => {
  return prisma.user.create({
    data: user,
  });
};

export const getAllRoutines = async () => {
  return prisma.user.findMany();
};

export const getRoutine = async (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const updateRoutine = async (id: number, routine: Routine) => {
  return prisma.routine.update({
    where: {
      id,
    },
    data: routine,
  });
};
