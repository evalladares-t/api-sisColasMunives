
const BaseBusiness = require("./base.business");
const { TipoModulo } = require("./models");

class TipoModuloBusiness extends BaseBusiness {
    constructor({ TipomoduloRepository }) {
        super(TipomoduloRepository, TipoModulo);
    }
}

module.exports = TipoModuloBusiness;