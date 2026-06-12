const jobModel = require('../../models/jobModel');

const getApplicationsForJob = async (req, res) => {
    const jobId = parseInt(req.params.jobId); // Obtener jobId de los parámetros de la ruta

    try {
        const applications = await jobModel.getApplicationsForJob(jobId);

        res.json(applications);
    } catch (error) {
        console.error('Error al obtener las solicitudes:', error);
        res.status(500).json({ error: 'Error al obtener las solicitudes' });
    }
};

module.exports = getApplicationsForJob;