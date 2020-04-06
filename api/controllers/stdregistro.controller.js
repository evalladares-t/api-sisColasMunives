const BaseController = require("./base.controller");
const {StdregistroDTO} = require('../dtos');
const Resource = "stdregistro";

class StdRegistroController extends BaseController{
    constructor({StdRegistroService}) {
        super(StdRegistroService,StdregistroDTO,Resource)
    }
}

module.exports = StdRegistroController;