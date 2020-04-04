
const BaseBusiness = require("./base.business");
const { Prioridad } = require("./models");

class PrioridadBusiness extends BaseBusiness {
    constructor({ PrioridadRepository }) {
        super(PrioridadRepository, Prioridad);
    }
}

module.exports = PrioridadBusiness;