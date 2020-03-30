const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ActionRoutes}) {
    const router  = Router();
    const apiRoute = Router();
    apiRoute.use(cors()).use(bodyParser.json()).use(compression());
    apiRoute.use('/action', ActionRoutes);
    router.use('/api/v1.0',apiRoute);
    return router;
};