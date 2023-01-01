import { User } from "@prisma/client";
import { prisma } from "./init";

export const createUser = async (user: User) => {
  return prisma.user.create({
    data: user,
  });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUser = async (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const updateUser = async (id: number, user: User) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: user,
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};
