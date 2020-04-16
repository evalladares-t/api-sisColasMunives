const BaseController = require("./base.controller");
const {CasuisticaDto,SubcasuisticaDTO,PrioridadDTO} = require('../dtos');
const Resource = "casuistica";
const mapper = require('automapper-js');
class CasuisticaController extends BaseController{
    constructor({CasuisticaService}) {
        super(CasuisticaService,CasuisticaDto,Resource)
    }

    async showdep(req,res){
        const {id} = req.params;
        let result = await this._serviceBase.showdep(id);
        const casuistica = mapper(this._DTO,result.casuistica);
        const subcasuistica = mapper(SubcasuisticaDTO,result.subcasuistica);
        const prioridad = mapper(PrioridadDTO,result.prioridad);
        return res.json({
            casuistica,
            subcasuistica,
            prioridad

        })
    }

}

module.exports = CasuisticaController;