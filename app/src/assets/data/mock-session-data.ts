import routines from "./routine";

const routineNames = routines[0];
export const SesssionData = {
  userName: "amar-jay",
  userAge: 18,
  userActive: 3,
  gender: "male",
  weight: 70,
  height: 180,
  activity: 1.2,
  bmr: 0,
  tdee: 0,
  goal: "lose",
  goalWeight: 60,
  goalDate: new Date(),
  routinesDone: [
    routineNames["Full Body Dips"],
    routineNames["Get on the Rings"]
  ]
} as const;
