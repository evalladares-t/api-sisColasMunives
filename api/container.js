const {asClass,createContainer,asFunction,asValue} = require('awilix');

//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

//routes
const Routes = require('./routes');
const ActionRoutes = require('./routes/action.routes');

//controller
const {ActionController} = require('./controllers');

//services
const {ActionService} = require('../services');

//repositories
const {ActionRepository} = require('../dal/repositories');

//business
const {ActionBusiness} = require('../domain');

//conf db
const db = require('../dal/models');


const container = createContainer();

container
    .register({
        app:asClass(StartUp).singleton(),
        server : asClass(Server).singleton(),
        router : asFunction(Routes).singleton(),
        //Api Action
        ActionController : asClass(ActionController).singleton(),
        ActionRoutes : asFunction(ActionRoutes).singleton()
    })
    .register({
        config : asValue(config)
    })
    .register({
        db : asValue(db)
    })
    .register({
        ActionService : asClass(ActionService).singleton()
    })
    .register({
        ActionRepository : asClass(ActionRepository).singleton()
    })
    .register({
        ActionBusiness: asClass(ActionBusiness).singleton()
    });

module.exports = container;