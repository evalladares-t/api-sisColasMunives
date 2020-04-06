const {asClass,createContainer,asFunction,asValue} = require('awilix');

//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

//routes
const Routes = require('./routes');
const PrioridadRoutes = require('./routes/prioridad.routes');
const FranjaHorariaRoutes = require('./routes/franjahoraria.routes');
const TipoModuloRoutes = require('./routes/tipomulo.routes');
const StdRegistroRoutes = require('./routes/stdregistro.routes');
const TiempoGestionRoutes = require('./routes/tiempogestion.routes');
const StdatencionRoutes = require('./routes/stdatencion.routes');

//controller
const {PrioridadController,
    Franjahorariacontroller,
    TipoModuloController,
    StdRegistroController,
    TiempoGestionController,
    Stdatencioncontroller} = require('./controllers');

//services
const {PrioridadService,
    FranjaHorariaService,
    TipoModuloService,
    StdRegistroService,
    TiempoGestionService,
    StdAtencionService,} = require('../services');

//business
const {PrioridadBusiness,
    FranjaHorariaBusiness,
    TipoModuloBusiness,
    StdRegistroBusiness,
    TiempoGestionBusiness,
    StdAtencionBusiness} = require('../domain');


//repositories
const {PrioridadRepository,
    FranjaHorariaRepository,
    TipomoduloRepository,
    StdAtencionRepository,
    TiempoGestionRepository,
    StdRegistroRepository} = require('../dal/repositories');


//conf db
const db = require('../dal/models');


const container = createContainer();

container
    .register({
        app:asClass(StartUp).singleton(),
        server : asClass(Server).singleton(),
        router : asFunction(Routes).singleton(),
        //Api Action
            //Controllers
        PrioridadController : asClass(PrioridadController).singleton(),
        Franjahorariacontroller : asClass(Franjahorariacontroller).singleton(),
        TipoModuloController : asClass(TipoModuloController).singleton(),
        StdRegistroController : asClass(StdRegistroController).singleton(),
        TiempoGestionController : asClass(TiempoGestionController).singleton(),
        Stdatencioncontroller : asClass(Stdatencioncontroller).singleton(),
            //Routes
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton(),
        FranjaHorariaRoutes : asFunction(FranjaHorariaRoutes).singleton(),
        TipoModuloRoutes : asFunction(TipoModuloRoutes).singleton(),
        StdRegistroRoutes : asFunction(StdRegistroRoutes).singleton(),
        TiempoGestionRoutes : asFunction(TiempoGestionRoutes).singleton(),
        StdatencionRoutes : asFunction(StdatencionRoutes).singleton()
    })
    .register({
        config : asValue(config)
    })
    .register({
        db : asValue(db)
    })
    .register({
        PrioridadService : asClass(PrioridadService).singleton(),
        FranjaHorariaService : asClass(FranjaHorariaService).singleton(),
        TipoModuloService : asClass(TipoModuloService).singleton(),
        StdRegistroService : asClass(StdRegistroService).singleton(),
        TiempoGestionService : asClass(TiempoGestionService).singleton(),
        StdAtencionService : asClass(StdAtencionService).singleton(),
    })
    .register({
        PrioridadBusiness: asClass(PrioridadBusiness).singleton(),
        FranjaHorariaBusiness: asClass(FranjaHorariaBusiness).singleton(),
        TipoModuloBusiness: asClass(TipoModuloBusiness).singleton(),
        StdRegistroBusiness: asClass(StdRegistroBusiness).singleton(),
        TiempoGestionBusiness: asClass(TiempoGestionBusiness).singleton(),
        StdAtencionBusiness: asClass(StdAtencionBusiness).singleton(),
    })
    .register({
        PrioridadRepository : asClass(PrioridadRepository).singleton(),
        FranjaHorariaRepository : asClass(FranjaHorariaRepository).singleton(),
        TipomoduloRepository : asClass(TipomoduloRepository).singleton(),
        StdRegistroRepository : asClass(StdRegistroRepository).singleton(),
        TiempoGestionRepository : asClass(TiempoGestionRepository).singleton(),
        StdAtencionRepository : asClass(StdAtencionRepository).singleton(),
    });


module.exports = container;