/*const express = require('express');
const infoClase = require('../src/clases'); 
const routerClase = express.Router();

// GET /api/clases
routerClase.get('/', (req, res) => {
    res.json(infoClase); // Express envía el JSON automáticamente
});

module.exports = routerClase;
*/

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clasesController');

// rutas para manejar los CRUD de clases
router.get('/:id', controller.getClaseById);
router.post('/', controller.postClase);


module.exports = router;
