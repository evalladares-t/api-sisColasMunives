const BaseController = require("./base.controller");
const {FranjahorariaDto} = require('../dtos');
const Resource = "franjahoraria";

class Franjahorariacontroller extends BaseController{
    constructor({FranjaHorariaService}) {
        super(FranjaHorariaService,FranjahorariaDto,Resource)
    }
}

module.exports = Franjahorariacontroller;