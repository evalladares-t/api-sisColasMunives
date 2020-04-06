
const BaseService = require("./base.service");

class TiempoGestionService extends BaseService {
    constructor({ TiempoGestionBusiness }) {
        super(TiempoGestionBusiness);
    }
}

module.exports = TiempoGestionService;