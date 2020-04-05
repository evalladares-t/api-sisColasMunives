
const BaseBusiness = require("./base.business");
const { FranjaHoraria } = require("./models");

class FranjaHorariaBusiness extends BaseBusiness {
    constructor({ FranjaHorariaRepository }) {
        super(FranjaHorariaRepository, FranjaHoraria);
    }
}

module.exports = FranjaHorariaBusiness;