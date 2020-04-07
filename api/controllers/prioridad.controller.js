const BaseController = require("./base.controller");
const {PrioridadDTO} = require('../dtos');
const Resource = "prioridad";
class PrioridadController extends BaseController{
    constructor({PrioridadService}) {
        super(PrioridadService,PrioridadDTO,Resource)
    }
}

module.exports = PrioridadController;