const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Usuario,Multimedia } = require("./models");

class UsuarioBusiness extends BaseBusiness {
    constructor({ UsuarioRepository }) {
        super(UsuarioRepository, Usuario);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;

        const usuario = mapper(this.entityToMap, entity.toJSON());

        const multimedia = (!entity.tb_multimedia)?mapper(Multimedia, entity.tb_multimedia.toJSON()):null;
        const atencion = (!entity.tb_atencion)?mapper(TipoModulo, entity.tb_atencion.toJSON()):null;
        const registromodulo = (!entity.tb_registromodulo)?mapper(TipoModulo, entity.tb_registromodulo.toJSON()):null;
        return {usuario,multimedia,atencion,registromodulo}
    }
}

module.exports = UsuarioBusiness;