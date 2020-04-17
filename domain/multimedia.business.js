const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Usuario,Multimedia } = require("./models");

class MultimediaBusiness extends BaseBusiness {
    constructor({ MultimediaRepository }) {
        super(MultimediaRepository, Multimedia);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        const multimedia = mapper(this.entityToMap, entity.toJSON());
        const usuario = mapper(Usuario, entity.tb_usuario.toJSON());
        return {usuario,multimedia}
    }
}

module.exports = MultimediaBusiness;