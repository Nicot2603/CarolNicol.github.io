const express = require('express');
const router = express.Router();
const { getJobs1, getJobs2, getJobs3 } = require('../../jobs/index');

// Ruta para obtener las ofertas de trabajo
router.get('/jobs1', getJobs1);
router.get('/jobs2', getJobs2);
router.get('/jobs3', getJobs3);

module.exports = router;
