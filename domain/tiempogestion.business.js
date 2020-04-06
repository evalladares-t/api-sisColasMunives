
const BaseBusiness = require("./base.business");
const { Tiempogestion } = require("./models");

class TiempoGestionBusiness extends BaseBusiness {
    constructor({ TiempoGestionRepository }) {
        super(TiempoGestionRepository, Tiempogestion);
    }
}

module.exports = TiempoGestionBusiness;