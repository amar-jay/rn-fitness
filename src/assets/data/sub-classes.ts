const subCategories = [
  {
    id: 1,
    routineDifficulty: "beginner",
    title: "Beginner",
    selected: false
  },
  {
    id: 2,
    routineDifficulty: "moderate",
    title: "Moderate",
    selected: false
  },
  {
    id: 3,
    routineDifficulty: "advance",
    title: "Advance",
    selected: false
  }
]

export type SubCategory = typeof subCategories[0]
export default subCategories
