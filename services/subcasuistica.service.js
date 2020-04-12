
const BaseService = require("./base.service");

class SubcasuisticaService extends BaseService {
    constructor({ SubcasuisticaBusiness }) {
        super(SubcasuisticaBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = SubcasuisticaService;