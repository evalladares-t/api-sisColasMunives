
const BaseBusiness = require("./base.business");
const { StdAtencion } = require("./models");

class StdAtencionBusiness extends BaseBusiness {
    constructor({ StdAtencionRepository }) {
        super(StdAtencionRepository, StdAtencion);
    }
}

module.exports = StdAtencionBusiness;