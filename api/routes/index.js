const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const router  = Router();
const apiRoute = Router();
apiRoute.use(cors()).use(bodyParser.json()).use(compression());

module.exports = function ({PrioridadRoutes,FranjaHorariaRoutes,TipoModuloRoutes}) {
    apiRoute.use('/prioridad', PrioridadRoutes);
    apiRoute.use('/franjahoraria', FranjaHorariaRoutes);
    apiRoute.use('/tipomodulo', TipoModuloRoutes);
    router.get('/api/v1.0',(req,res)=>{
        const {protocol, hostname,url} = req;
        res.json({
            'Prioridad': `${protocol}://${hostname + url}prioridad`,
            'FranjaHoraria':`${protocol}://${hostname + url}franjahoraria`,
            'TipoModulo':`${protocol}://${hostname + url}tipomodulo`
        })
    });
    router.use('/api/v1.0',apiRoute);
    return router;
};