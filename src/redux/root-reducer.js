import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import jobReducer from "./jobs/jobs.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobReducer
})

export default rootReducer;