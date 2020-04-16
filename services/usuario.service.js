
const BaseService = require("./base.service");

class UsuarioService extends BaseService {
    constructor({ UsuarioBusiness }) {
        super(UsuarioBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = UsuarioService;