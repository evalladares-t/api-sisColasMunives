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
const StdatencionRoutes = require('./routes/stdatencion.routes');

//controller
const {PrioridadController,
    Franjahorariacontroller,
    TipoModuloController,
    Stdatencioncontroller} = require('./controllers');

//services
const {PrioridadService,
    FranjaHorariaService,
    TipoModuloService,
    StdAtencionService} = require('../services');

//business
const {PrioridadBusiness,
    FranjaHorariaBusiness,
    TipoModuloBusiness,
    StdAtencionBusiness} = require('../domain');


//repositories
const {PrioridadRepository,
    FranjaHorariaRepository,
    TipomoduloRepository,
    StdAtencionRepository} = require('../dal/repositories');




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
        Stdatencioncontroller : asClass(Stdatencioncontroller).singleton(),
            //Routes
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton(),
        FranjaHorariaRoutes : asFunction(FranjaHorariaRoutes).singleton(),
        TipoModuloRoutes : asFunction(TipoModuloRoutes).singleton(),
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
        StdAtencionService : asClass(StdAtencionService).singleton(),
    })
    .register({
        PrioridadBusiness: asClass(PrioridadBusiness).singleton(),
        FranjaHorariaBusiness: asClass(FranjaHorariaBusiness).singleton(),
        TipoModuloBusiness: asClass(TipoModuloBusiness).singleton(),
        StdAtencionBusiness: asClass(StdAtencionBusiness).singleton(),
    })
    .register({
        PrioridadRepository : asClass(PrioridadRepository).singleton(),
        FranjaHorariaRepository : asClass(FranjaHorariaRepository).singleton(),
        TipomoduloRepository : asClass(TipomoduloRepository).singleton(),
        StdAtencionRepository : asClass(StdAtencionRepository).singleton(),
    });


module.exports = container;