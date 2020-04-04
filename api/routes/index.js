const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const router  = Router();
const apiRoute = Router();
apiRoute.use(cors()).use(bodyParser.json()).use(compression());

module.exports = function ({PrioridadRoutes}) {
    apiRoute.use('/prioridad', PrioridadRoutes);
    router.use('/api/v1.0',apiRoute);
    return router;
};