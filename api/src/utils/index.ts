import { Profile, User } from "@prisma/client";

export const isUser = (u: unknown): u is User => {
  const body = u as User;
  if (typeof body !== "object") return false;

  if (typeof body.id !== "number") return false;
  if (typeof body.name !== "string") return false;
  if (typeof body.age !== "number") return false;
  if (typeof body.bmi !== "number") return false;
  if (typeof body.profileId !== "string") return false;
  if (typeof body.height !== "number") return false;
  if (typeof body.weight !== "number") return false;

  return true;
};

const isProfile = (u: unknown): u is Profile => {
  const body = u as Profile;
  if (typeof body !== "object") return false;

  if (typeof body.userId !== "number") return false;
  if (typeof body.bio !== "string") return false;
  if (typeof body.email !== "string") return false;
  if (typeof body.id !== "number") return false;

  return true;
};
/**To Remove **UserID** */
export const maptoProfile = (u: string): Omit<Profile, "userId"> | Error => {
  const user = JSON.parse(u);
  if (!isProfile(user)) return new Error("Invalid User");
  const { userId, ...rest } = user;

  return rest;
};
