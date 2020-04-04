const {asClass,createContainer,asFunction,asValue} = require('awilix');

//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

//routes
const Routes = require('./routes');
const PrioridadRoutes = require('./routes/prioridad.routes');

//controller
const {PrioridadController} = require('./controllers');

//services
const {PrioridadService} = require('../services');

//business
const {PrioridadBusiness} = require('../domain');


//repositories
const {PrioridadRepository} = require('../dal/repositories');



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
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton()
    })
    .register({
        config : asValue(config)
    })
    .register({
        db : asValue(db)
    })
    .register({
        PrioridadService : asClass(PrioridadService).singleton()
    })
    .register({
        PrioridadBusiness: asClass(PrioridadBusiness).singleton()
    })
    .register({
        PrioridadRepository : asClass(PrioridadRepository).singleton()
    });


module.exports = container;