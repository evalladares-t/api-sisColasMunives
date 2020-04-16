
const BaseService = require("./base.service");

class CasuisticaService extends BaseService {
    constructor({ CasuisticaBusiness }) {
        super(CasuisticaBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = CasuisticaService;