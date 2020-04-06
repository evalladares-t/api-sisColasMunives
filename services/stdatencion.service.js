
const BaseService = require("./base.service");

class StdAtencionService extends BaseService {
    constructor({ StdAtencionBusiness }) {
        super(StdAtencionBusiness);
    }
}

module.exports = StdAtencionService;