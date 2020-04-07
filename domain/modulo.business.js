const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Modulo,TipoModulo } = require("./models");

class ModuloBusiness extends BaseBusiness {
    constructor({ ModuloRepository }) {
        super(ModuloRepository, Modulo);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        const modulo = mapper(this.entityToMap, entity.toJSON());
        const tbtipomod = mapper(TipoModulo, entity.tb_tipomodulo.toJSON());
        return {modulo,tbtipomod}
    }
}

module.exports = ModuloBusiness;