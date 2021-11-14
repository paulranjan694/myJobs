import { APIUrls } from "../../utils/urls"
import { getToken } from "../../utils/utils";
import { JobsActionType } from "./jobs.types";

function loadJobsSuccess(jobs){
    return {
        type:JobsActionType.LOAD_JOB,
        jobs
    }
}

export function loadJobs(){
    return dispatch => {
        const url = APIUrls.loadJobs();
        fetch(url,{
            method:'GET',
            headers:{
                "Authorization": getToken()
            }
        }).then(response => response.json())
        .then(data=> {
            if(data.success){
               if(data.data){
                   dispatch(loadJobsSuccess(data.data.data));
                   return;
               }else{
                   return;
               }
            }
        })
    }
}

export function addJob(job){
    return {
        type: JobsActionType.POST_JOB,
        job
    }
}


export function createJob(title, description, location){
    return dispatch => {
        const url = APIUrls.postJob();
        fetch(url, {
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Authorization": getToken(),
            },
            body:JSON.stringify({
                title,
                description,
                location
              }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            if(data.success){
                dispatch(addJob(data.data));
                return;
            }
        });
    }
}