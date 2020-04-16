const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Casuistica,Subcasuistica,Prioridad } = require("./models");

class CasuisticaBusiness extends BaseBusiness {
    constructor({ CasuisticaRepository }) {
        super(CasuisticaRepository, Casuistica);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        const casuistica = mapper(this.entityToMap, entity.toJSON());
        const subcasuistica = mapper(Subcasuistica, entity.tb_subcasuistica.toJSON());
        const prioridad = mapper(Prioridad, entity.tb_subcasuistica.tb_prioridad.toJSON());
        //console.log({"casuistica":casuistica,"subcasuis":subcasuistica,"prioridad":prioridad})
        return {casuistica,subcasuistica,prioridad}
    }
}

module.exports = CasuisticaBusiness;