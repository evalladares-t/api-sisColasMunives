const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { Usuario,Multimedia,Atencion,RegistroModulo } = require("./models");

class UsuarioBusiness extends BaseBusiness {
    constructor({ UsuarioRepository }) {
        super(UsuarioRepository, Usuario);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        const usuario = mapper(this.entityToMap, entity.toJSON());
        let multimedia = null;
        let atencion = null;
        let registromodulo = null;
        if(entity.tb_multimedia){
            multimedia = mapper(Multimedia, entity.tb_multimedia);
        }
        if(entity.tb_atencion){
            atencion = mapper(Atencion, entity.tb_atencion);
        }
        if(entity.tb_registromodulo){
            registromodulo = mapper(RegistroModulo, entity.tb_registromodulo);
        }
        return {usuario,multimedia,atencion,registromodulo}
    }
}

module.exports = UsuarioBusiness;