
const BaseRepository = require("./base.repository");
class UsuarioRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_usuario");
    }

    index(offset,limit) {
        const result = this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'iduser'
            ]
        });
        return result
    }

    show(iduser) {
        const result = this._db[this.entity].findOne({ where: { iduser }, include:[{
                model: this._db["tb_multimedia"],
                as:'tb_multimedia'
            },{
                model: this._db["tb_atencion"],
                as:'tb_atencion'
            },{
                model: this._db["tb_registromodulo"],
                as:'tb_registromodulo'
            }
            ] });

        return result
    }

    update(iduser, entity) {
        entity.iduser = parseInt(iduser);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { iduser } });
    }

    destroy(iduser) {
        return this._db[this.entity].destroy({ where: { iduser } });
    }
}

module.exports = UsuarioRepository;