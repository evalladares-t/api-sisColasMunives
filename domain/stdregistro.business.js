
const BaseBusiness = require("./base.business");
const { StdRegistro } = require("./models");

class StdRegistroBusiness extends BaseBusiness {
    constructor({ StdRegistroRepository }) {
        super(StdRegistroRepository, StdRegistro);
    }
}

module.exports = StdRegistroBusiness;