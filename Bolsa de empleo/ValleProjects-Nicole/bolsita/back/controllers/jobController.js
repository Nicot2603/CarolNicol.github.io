const getAllJobs = require('./job/getAllJobs');
const getJobById = require('./job/getJobById');
const createJob = require('./job/createJob');
const updateJob = require('./job/updateJob');
const deleteJob = require('./job/deleteJob');
const applyToJob = require('./job/applyToJob');
const getApplicationsForJob = require('./job/getApplicationsForJob');
const updateApplicationStatus = require('./job/updateApplicationStatus');
const getUserApplications = require('./job/getUserApplications');
const getJobsByEmpresa = require('./job/getJobsByEmpresa'); 

module.exports = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
    applyToJob,
    getApplicationsForJob,
    updateApplicationStatus,
    getUserApplications,
    getJobsByEmpresa,
};