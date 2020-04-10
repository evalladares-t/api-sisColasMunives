const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const router  = Router();
const apiRoute = Router();
apiRoute.use(cors()).use(bodyParser.json()).use(compression());

module.exports = function ({PrioridadRoutes,FranjaHorariaRoutes,TicketRoutes,TipoModuloRoutes,StdRegistroRoutes,
                            TiempoGestionRoutes,ModuloRoutes,
                               StdatencionRoutes}) {
    apiRoute.use('/prioridad', PrioridadRoutes);
    apiRoute.use('/franjahoraria', FranjaHorariaRoutes);
    apiRoute.use('/ticket', TicketRoutes);
    apiRoute.use('/tipomodulo', TipoModuloRoutes);
    apiRoute.use('/stdregistro', StdRegistroRoutes);
    apiRoute.use('/tiempogestion', TiempoGestionRoutes);
    apiRoute.use('/modulo', ModuloRoutes);
    apiRoute.use('/stdatencion', StdatencionRoutes);
    apiRoute.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    router.get('/api/v1.0',(req,res)=>{
        const {protocol, hostname,url} = req;
        res.json({
            'Prioridad': `${protocol}://${hostname}:${process.env.PORT}${url}/prioridad`,
            'FranjaHoraria':`${protocol}://${hostname}:${process.env.PORT}${url}/franjahoraria`,
            'Ticket':`${protocol}://${hostname}:${process.env.PORT}${url}/ticket`,
            'TipoModulo':`${protocol}://${hostname}:${process.env.PORT}${url}/tipomodulo`,
            'EstadoRegistro':`${protocol}://${hostname}:${process.env.PORT}${url}/stdregistro`,
            'TiempoGestion':`${protocol}://${hostname}:${process.env.PORT}${url}/tiempogestion`,
            'Modulo':`${protocol}://${hostname}:${process.env.PORT}${url}/modulo`,
            'EstadoAtencion':`${protocol}://${hostname}:${process.env.PORT}${url}/stdatencion`
        })
    });
    router.use('/api/v1.0',apiRoute);
    return router;
};