const BaseController = require("./base.controller");
const {SubcasuisticaDTO,PrioridadDTO} = require('../dtos');
const Resource = "subcasuistica";
const mapper = require('automapper-js');
class SubcasuiticaController extends BaseController{
    constructor({SubcasuisticaService}) {
        super(SubcasuisticaService,SubcasuisticaDTO,Resource)
    }

    async showdep(req,res){
        const {id} = req.params;
        let result = await this._serviceBase.showdep(id);
        const subcasuistica = mapper(this._DTO,result.subcasuistica);
        const prioridad = mapper(PrioridadDTO,result.prioridad);
        return res.json({
            subcasuistica,
            prioridad

        })
    }
}

module.exports = SubcasuiticaController;