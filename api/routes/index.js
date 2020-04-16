const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const router  = Router();
const apiRoute = Router();
apiRoute.use(cors()).use(bodyParser.json()).use(compression());

module.exports = function ({UsuarioRoutes,PrioridadRoutes,FranjaHorariaRoutes,TicketRoutes,SubcasuisticaRoutes,CasuisticaRoutes,TipoModuloRoutes,StdRegistroRoutes,
                            TiempoGestionRoutes,ModuloRoutes,
                               StdatencionRoutes}) {
    apiRoute.use('/usuario', UsuarioRoutes);
    apiRoute.use('/prioridad', PrioridadRoutes);
    apiRoute.use('/franjahoraria', FranjaHorariaRoutes);
    apiRoute.use('/ticket', TicketRoutes);
    apiRoute.use('/subcasuistica', SubcasuisticaRoutes);
    apiRoute.use('/casuistica', CasuisticaRoutes);
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
            'Usuario': `${protocol}://${hostname}:${process.env.PORT}${url}/usuario`,
            'Prioridad': `${protocol}://${hostname}:${process.env.PORT}${url}/prioridad`,
            'FranjaHoraria':`${protocol}://${hostname}:${process.env.PORT}${url}/franjahoraria`,
            'Ticket':`${protocol}://${hostname}:${process.env.PORT}${url}/ticket`,
            'Ticket':`${protocol}://${hostname}:${process.env.PORT}${url}/casuistica`,
            'Subcasuistica':`${protocol}://${hostname}:${process.env.PORT}${url}/subcasuistica`,
            'Modulo':`${protocol}://${hostname}:${process.env.PORT}${url}/modulo`,
            'TipoModulo':`${protocol}://${hostname}:${process.env.PORT}${url}/tipomodulo`,
            'EstadoRegistro':`${protocol}://${hostname}:${process.env.PORT}${url}/stdregistro`,
            'TiempoGestion':`${protocol}://${hostname}:${process.env.PORT}${url}/tiempogestion`,
            'EstadoAtencion':`${protocol}://${hostname}:${process.env.PORT}${url}/stdatencion`
        })
    });
    router.use('/api/v1.0',apiRoute);
    return router;
};