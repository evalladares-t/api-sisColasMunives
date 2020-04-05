const {asClass,createContainer,asFunction,asValue} = require('awilix');

//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

//routes
const Routes = require('./routes');
const PrioridadRoutes = require('./routes/prioridad.routes');
const FranjaHorariaRoutes = require('./routes/franjahoraria.routes');

//controller
const {PrioridadController,
    Franjahorariacontroller} = require('./controllers');

//services
const {PrioridadService,
    FranjaHorariaService} = require('../services');

//business
const {PrioridadBusiness,
    FranjaHorariaBusiness} = require('../domain');


//repositories
const {PrioridadRepository,
    FranjaHorariaRepository} = require('../dal/repositories');




//conf db
const db = require('../dal/models');


const container = createContainer();

container
    .register({
        app:asClass(StartUp).singleton(),
        server : asClass(Server).singleton(),
        router : asFunction(Routes).singleton(),
        //Api Action
        PrioridadController : asClass(PrioridadController).singleton(),
        Franjahorariacontroller : asClass(Franjahorariacontroller).singleton(),
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton(),
        FranjaHorariaRoutes : asFunction(FranjaHorariaRoutes).singleton()
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
    })
    .register({
        PrioridadBusiness: asClass(PrioridadBusiness).singleton(),
        FranjaHorariaBusiness: asClass(FranjaHorariaBusiness).singleton(),
    })
    .register({
        PrioridadRepository : asClass(PrioridadRepository).singleton(),
        FranjaHorariaRepository : asClass(FranjaHorariaRepository).singleton(),
    });


module.exports = container;