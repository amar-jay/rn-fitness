import { HomeData } from "types";
const data: HomeData[] = [
  {
    id: "0",
    routineDifficulty: "advance",
    routineData: {
      routine_name: "Get on the Rings",
      image: require("@/assets/icon.png"),
      //routine_level: "Advance",
      routine_description: "Just do it",
      routine_time: "40"
    },
    image: require("../images/exercise_1.jpeg"),
    color: "#EEF7FE"
  },
  {
    id: "1",
    routineDifficulty: "beginner",
    routineData: {
      routine_name: "Full Body Dips",
      image: require("@/assets/icon.png"),
      //routine_level: "Beginner",
      routine_description: "Just do it",
      routine_time: "20"
    },
    image: require("../images/exercise_2.jpeg"),
    color: "#FFF5E8"
  },
  {
    id: "2",
    routineDifficulty: "intermediate",
    routineData: {
      routine_name: "Power Planches",
      image: require("@/assets/icon.png"),
      //routine_level: "Intermediate",
      routine_description: "Just do it",
      routine_time: "30"
    },
    image: require("../images/exercise_3.jpeg"),
    color: "#F6F6F6"
  },
  /*{
    id: '3',
    routineDifficulty: 'beginner',
    routineData: {
      routine_name: 'Legs of Iron',
      routine_level: 'Beginner',
      routine_time: '20',
    },
    image: require('../images/Home/legs.jpeg'),
    color: '#fce2cc',
  },*/
  {
    id: "4",
    routineDifficulty: "advance",
    routineData: {
      routine_name: "Increase Mobility",
      //routine_level: "Advance",
      routine_description: "Just do it",
      image: require("@/assets/icon.png"),
      routine_time: "40"
    },
    image: require("../images/exercise_4.jpeg"),
    color: "#d5edf7"
  }
];

export default data;
