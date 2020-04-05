const BaseController = require("./base.controller");
const {PrioridadDTO} = require('../dtos');
const Resource = "prioridad";
const DTO = PrioridadDTO;
class PrioridadController extends BaseController{
    constructor({PrioridadService}) {
        super(PrioridadService,DTO,Resource)
    }
}

module.exports = PrioridadController;