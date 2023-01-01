const routines = [
  {
    "Get on the Rings": [
      {
        id: "1",
        routineName: "Archer on the Rings",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "2",
        routineName: "Bulgarian Push Ups",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "3",
        routineName: "Front Lever",
        routineDescription: "10 X 4",
        image: require("../icon.png")
      },
      {
        id: "4",
        routineName: "Muscle Rings Up",
        routineDescription: "20 X 4",
        image: require("../icon.png")
      },
      {
        id: "5",
        routineName: "Neutral Grip Row on Rings",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "6",
        routineName: "False Grip",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      }
    ],
    "Full Body Dips": [
      {
        id: "1",
        routineName: "Pancake",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "2",
        routineName: "Deep Squat",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "3",
        routineName: "Korean Dips",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "4",
        routineName: "Archer Push Ups",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "5",
        routineName: "Pike On The Bar",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      }
    ],
    "Power Planches": [
      {
        id: "1",
        routineName: "Frog Stand",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "2",
        routineName: "Hollow Push Ups",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "3",
        routineName: "Archer On Strings",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "4",
        routineName: "Stradles",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      }
    ],
    "Legs of Iron": [
      {
        id: "1",
        routineName: "Airbone Squats",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "2",
        routineName: "Formidble Bridge",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "3",
        routineName: "Hwaiin Squats",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "4",
        routineName: "Push Up Plank",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      }
    ],
    "Increase Mobility": [
      {
        id: "1",
        routineName: "Partial Crunch with Bent Legs",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "2",
        routineName: "Bent Over Here",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      },
      {
        id: "3",
        routineName: "Hand Stand",
        routineDescription: "10 X 8",
        image: require("../icon.png")
      }
    ]
  }
] as Routine[];

interface Routine {
  [key: string]: {
    id: string;
    routineName: string;
    routineDescription: string;
    image: any;
  }[];
}
export default routines;
