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
const TicketRoutes = require('./routes/ticket.routes');
const SubcasuisticaRoutes = require('./routes/subcasuistica.routes');
const CasuisticaRoutes = require('./routes/casuistica.routes');
const UsuarioRoutes = require('./routes/usuario.routes');
const MultimediaRoutes = require('./routes/multimedia.routes');

//controller
const {UsuarioController,
    MultimediaController,
    PrioridadController,
    Franjahorariacontroller,
    TicketController,
    CasuisticaController,
    SubcasuisticaController,
    TipoModuloController,
    StdRegistroController,
    TiempoGestionController,
    ModuloController,
    Stdatencioncontroller} = require('./controllers');

//services
const {UsuarioService,
    MultimediaService,
    PrioridadService,
    FranjaHorariaService,
    TicketService,
    CasuisticaService,
    SubcasuisticaService,
    TipoModuloService,
    StdRegistroService,
    TiempoGestionService,
    ModuloService,
    StdAtencionService,} = require('../services');

//business
const {UsuarioBusiness,
    MultimediaBusiness,
    PrioridadBusiness,
    FranjaHorariaBusiness,
    TicketBusiness,
    CasuisticaBusiness,
    SubcasuisticaBusiness,
    TipoModuloBusiness,
    StdRegistroBusiness,
    TiempoGestionBusiness,
    ModuloBusiness,
    StdAtencionBusiness} = require('../domain');


//repositories
const {UsuarioRepository,
    MultimediaRepository,
    PrioridadRepository,
    FranjaHorariaRepository,
    TicketRepository,
    CasuisticaRepository,
    SubcasuisticaRepository,
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
        UsuarioController : asClass(UsuarioController).singleton(),
        MultimediaController : asClass(MultimediaController).singleton(),
        PrioridadController : asClass(PrioridadController).singleton(),
        Franjahorariacontroller : asClass(Franjahorariacontroller).singleton(),
        TicketController : asClass(TicketController).singleton(),
        SubcasuisticaController : asClass(SubcasuisticaController).singleton(),
        TipoModuloController : asClass(TipoModuloController).singleton(),
        StdRegistroController : asClass(StdRegistroController).singleton(),
        TiempoGestionController : asClass(TiempoGestionController).singleton(),
        ModuloController : asClass(ModuloController).singleton(),
        Stdatencioncontroller : asClass(Stdatencioncontroller).singleton(),
        CasuisticaController : asClass(CasuisticaController).singleton(),
            //Routes
        UsuarioRoutes : asFunction(UsuarioRoutes).singleton(),
        MultimediaRoutes : asFunction(MultimediaRoutes).singleton(),
        PrioridadRoutes : asFunction(PrioridadRoutes).singleton(),
        FranjaHorariaRoutes : asFunction(FranjaHorariaRoutes).singleton(),
        TicketRoutes : asFunction(TicketRoutes).singleton(),
        CasuisticaRoutes : asFunction(CasuisticaRoutes).singleton(),
        SubcasuisticaRoutes : asFunction(SubcasuisticaRoutes).singleton(),
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
        UsuarioService : asClass(UsuarioService).singleton(),
        MultimediaService : asClass(MultimediaService).singleton(),
        PrioridadService : asClass(PrioridadService).singleton(),
        FranjaHorariaService : asClass(FranjaHorariaService).singleton(),
        TicketService : asClass(TicketService).singleton(),
        CasuisticaService : asClass(CasuisticaService).singleton(),
        SubcasuisticaService : asClass(SubcasuisticaService).singleton(),
        TipoModuloService : asClass(TipoModuloService).singleton(),
        StdRegistroService : asClass(StdRegistroService).singleton(),
        TiempoGestionService : asClass(TiempoGestionService).singleton(),
        ModuloService : asClass(ModuloService).singleton(),
        StdAtencionService : asClass(StdAtencionService).singleton(),
    })
    .register({
        //Business
        UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
        MultimediaBusiness: asClass(MultimediaBusiness).singleton(),
        PrioridadBusiness: asClass(PrioridadBusiness).singleton(),
        FranjaHorariaBusiness: asClass(FranjaHorariaBusiness).singleton(),
        TicketBusiness: asClass(TicketBusiness).singleton(),
        CasuisticaBusiness: asClass(CasuisticaBusiness).singleton(),
        SubcasuisticaBusiness: asClass(SubcasuisticaBusiness).singleton(),
        TipoModuloBusiness: asClass(TipoModuloBusiness).singleton(),
        StdRegistroBusiness: asClass(StdRegistroBusiness).singleton(),
        TiempoGestionBusiness: asClass(TiempoGestionBusiness).singleton(),
        ModuloBusiness: asClass(ModuloBusiness).singleton(),
        StdAtencionBusiness: asClass(StdAtencionBusiness).singleton(),
    })
    .register({
        //Repository
        UsuarioRepository : asClass(UsuarioRepository).singleton(),
        MultimediaRepository : asClass(MultimediaRepository).singleton(),
        PrioridadRepository : asClass(PrioridadRepository).singleton(),
        FranjaHorariaRepository : asClass(FranjaHorariaRepository).singleton(),
        TicketRepository : asClass(TicketRepository).singleton(),
        CasuisticaRepository : asClass(CasuisticaRepository).singleton(),
        SubcasuisticaRepository : asClass(SubcasuisticaRepository).singleton(),
        TipomoduloRepository : asClass(TipomoduloRepository).singleton(),
        StdRegistroRepository : asClass(StdRegistroRepository).singleton(),
        TiempoGestionRepository : asClass(TiempoGestionRepository).singleton(),
        ModuloRepository : asClass(ModuloRepository).singleton(),
        StdAtencionRepository : asClass(StdAtencionRepository).singleton(),
    });


module.exports = container;