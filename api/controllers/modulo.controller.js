const BaseController = require("./base.controller");
const {ModuloDTO,TipoModuloDTO} = require('../dtos');
const Resource = "modulo";
const mapper = require('automapper-js');
class ModuloController extends BaseController{
    constructor({ModuloService}) {
        super(ModuloService,ModuloDTO,Resource)
    }

    async showdep(req,res){
        const {id} = req.params;
        let result = await this._serviceBase.showdep(id);
        if(!result){
            res.json({'message':'Recurso no encotrado'})
        }
        const modulo = mapper(this._DTO,result.modulo);
        const tipomodulo = mapper(TipoModuloDTO,result.tbtipomod);
        return res.json({
            modulo,
            tipomodulo

        })
    }

}

module.exports = ModuloController;