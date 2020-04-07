
const BaseService = require("./base.service");

class ModuloService extends BaseService {
    constructor({ ModuloBusiness }) {
        super(ModuloBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = ModuloService;