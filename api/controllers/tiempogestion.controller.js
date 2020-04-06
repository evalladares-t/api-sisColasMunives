const BaseController = require("./base.controller");
const {TiempoGestionDTO} = require('../dtos');
const Resource = "tiempogestion";

class TiempoGestionController extends BaseController{
    constructor({TiempoGestionService}) {
        super(TiempoGestionService,TiempoGestionDTO,Resource)
    }
}

module.exports = TiempoGestionController;