// TODO: #2 Set up analytics

import { getAnalytics } from "firebase/analytics";
import { firebaseApp } from "./init";

const analytics = getAnalytics(firebaseApp);

export default analytics;
