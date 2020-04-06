const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const router  = Router();
const apiRoute = Router();
apiRoute.use(cors()).use(bodyParser.json()).use(compression());

module.exports = function ({PrioridadRoutes,FranjaHorariaRoutes,TipoModuloRoutes,StdatencionRoutes,
                            StdRegistroRoutes}) {
    apiRoute.use('/prioridad', PrioridadRoutes);
    apiRoute.use('/franjahoraria', FranjaHorariaRoutes);
    apiRoute.use('/tipomodulo', TipoModuloRoutes);
    apiRoute.use('/stdregistro', StdRegistroRoutes);
    apiRoute.use('/stdatencion', StdatencionRoutes);
    router.get('/api/v1.0',(req,res)=>{
        const {protocol, hostname,url} = req;
        res.json({
            'Prioridad': `${protocol}://${hostname + url}prioridad`,
            'FranjaHoraria':`${protocol}://${hostname + url}franjahoraria`,
            'TipoModulo':`${protocol}://${hostname + url}tipomodulo`,
            'EstadoRegistro':`${protocol}://${hostname + url}stdregistro`,
            'EstadoAtencion':`${protocol}://${hostname + url}stdatencion`
        })
    });
    router.use('/api/v1.0',apiRoute);
    return router;
};