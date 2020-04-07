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
const ModuloRoutes = require('./routes/modulo.routes');
const StdatencionRoutes = require('./routes/stdatencion.routes');

//controller
const {PrioridadController,
    Franjahorariacontroller,
    TipoModuloController,
    StdRegistroController,
    TiempoGestionController,
    ModuloController,
    Stdatencioncontroller} = require('./controllers');

//services
const {PrioridadService,
    FranjaHorariaService,
    TipoModuloService,
    StdRegistroService,
    TiempoGestionService,
    ModuloService,
    StdAtencionService,} = require('../services');

//business
const {PrioridadBusiness,
    FranjaHorariaBusiness,
    TipoModuloBusiness,
    StdRegistroBusiness,
    TiempoGestionBusiness,
    ModuloBusiness,
    StdAtencionBusiness} = require('../domain');


//repositories
const {PrioridadRepository,
    FranjaHorariaRepository,
    TipomoduloRepository,
    StdAtencionRepository,
    TiempoGestionRepository,
    ModuloRepository,
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
        ModuloController : asClass(ModuloController).singleton(),
        Stdatencioncontroller : asClass(Stdatencioncontroller).singleton(),
            //Routes
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton(),
        FranjaHorariaRoutes : asFunction(FranjaHorariaRoutes).singleton(),
        TipoModuloRoutes : asFunction(TipoModuloRoutes).singleton(),
        StdRegistroRoutes : asFunction(StdRegistroRoutes).singleton(),
        TiempoGestionRoutes : asFunction(TiempoGestionRoutes).singleton(),
        ModuloRoutes : asFunction(ModuloRoutes).singleton(),
        StdatencionRoutes : asFunction(StdatencionRoutes).singleton()
    })
    .register({
        config : asValue(config)
    })
    .register({
        db : asValue(db)
    })
    .register({
        //Services
        PrioridadService : asClass(PrioridadService).singleton(),
        FranjaHorariaService : asClass(FranjaHorariaService).singleton(),
        TipoModuloService : asClass(TipoModuloService).singleton(),
        StdRegistroService : asClass(StdRegistroService).singleton(),
        TiempoGestionService : asClass(TiempoGestionService).singleton(),
        ModuloService : asClass(ModuloService).singleton(),
        StdAtencionService : asClass(StdAtencionService).singleton(),
    })
    .register({
        //Business
        PrioridadBusiness: asClass(PrioridadBusiness).singleton(),
        FranjaHorariaBusiness: asClass(FranjaHorariaBusiness).singleton(),
        TipoModuloBusiness: asClass(TipoModuloBusiness).singleton(),
        StdRegistroBusiness: asClass(StdRegistroBusiness).singleton(),
        TiempoGestionBusiness: asClass(TiempoGestionBusiness).singleton(),
        ModuloBusiness: asClass(ModuloBusiness).singleton(),
        StdAtencionBusiness: asClass(StdAtencionBusiness).singleton(),
    })
    .register({
        //Repository
        PrioridadRepository : asClass(PrioridadRepository).singleton(),
        FranjaHorariaRepository : asClass(FranjaHorariaRepository).singleton(),
        TipomoduloRepository : asClass(TipomoduloRepository).singleton(),
        StdRegistroRepository : asClass(StdRegistroRepository).singleton(),
        TiempoGestionRepository : asClass(TiempoGestionRepository).singleton(),
        ModuloRepository : asClass(ModuloRepository).singleton(),
        StdAtencionRepository : asClass(StdAtencionRepository).singleton(),
    });


module.exports = container;