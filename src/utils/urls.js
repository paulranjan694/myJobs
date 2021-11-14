const baseUrl = 'https://jobs-api.squareboat.info/api/v1';

export const APIUrls = {
    login: () => `${baseUrl}/auth/login`,
    register: () => `${baseUrl}/auth/register`,
    resetPassword: (email) => `${baseUrl}/auth/resetpassword?email=${email}`,
    verifyToken: (token) => `${baseUrl}/auth/resetpassword/${token}`,
    changePassword: () => `${baseUrl}/auth/resetpassword`,
    loadJobs: () => `${baseUrl}/recruiters/jobs`,
    postJob: () => `${baseUrl}/jobs`
}