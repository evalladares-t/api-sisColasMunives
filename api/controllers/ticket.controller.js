const BaseController = require("./base.controller");
const mapper = require('automapper-js');
const {TicketDTO,PrioridadDTO,FranjahorariaDto} = require('../dtos');
const Resource = "ticket";

class TicketController extends BaseController{
    constructor({TicketService}) {
        super(TicketService,TicketDTO,Resource)
    }

    async showdep(req,res){
        const {id} = req.params;
        let result = await this._serviceBase.showdep(id);
        const ticket = mapper(this._DTO,result.ticket);
        if(!result){
            res.json({'message':'Recurso no encotrado'})
        }
        const prioridad = mapper(PrioridadDTO,result.prioridad);
        const franjahoraria = mapper(FranjahorariaDto,result.franjahoraria);
        return res.json({
            ticket,
            prioridad,
            franjahoraria

        })
    }
}

module.exports = TicketController;