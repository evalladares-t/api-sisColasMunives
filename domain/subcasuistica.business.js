const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Subcasuistica,Prioridad } = require("./models");

class SubcasuisticaBusiness extends BaseBusiness {
    constructor({ SubcasuisticaRepository }) {
        super(SubcasuisticaRepository, Subcasuistica);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        console.log(entity)
        if (!entity) return null;
        const subcasuistica = mapper(this.entityToMap, entity.toJSON());
        const prioridad = mapper(Prioridad, entity.tb_prioridad.toJSON());
        return {subcasuistica,prioridad}
    }
}

module.exports = SubcasuisticaBusiness;