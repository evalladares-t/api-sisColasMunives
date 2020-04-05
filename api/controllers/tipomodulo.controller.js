const BaseController = require("./base.controller");
const {TipoModuloDTO} = require('../dtos');
const Resource = "tipomodulo";

class TipoModuloController extends BaseController{
    constructor({TipoModuloService}) {
        super(TipoModuloService,TipoModuloDTO,Resource)
    }
}

module.exports = TipoModuloController;