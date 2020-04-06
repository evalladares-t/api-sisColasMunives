const BaseController = require("./base.controller");
const {StdatencionDto} = require('../dtos');
const Resource = "stdatencion";

class TipoModuloController extends BaseController{
    constructor({StdAtencionService}) {
        super(StdAtencionService,StdatencionDto,Resource)
    }
}

module.exports = TipoModuloController;