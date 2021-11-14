import { JobsActionType } from "./jobs.types";

// const INITIAL_STATE = {
//     jobs:[],
// }

const jobReducer = (state=[], action) => {
    switch (action.type) {
        case JobsActionType.LOAD_JOB:
            return action.jobs;
        case JobsActionType.POST_JOB:
            return [action.job,...state];
        default:
            return state;
    }
}

export default jobReducer;