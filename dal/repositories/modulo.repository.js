
const BaseRepository = require("./base.repository");
class PrioridadRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_modulo");
    }

    index(offset,limit) {
        const result = this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idmod'
            ]
        });
        return result
    }

    show(idmod) {
        const result = this._db[this.entity].findOne({ where: { idmod }, include:[{
                model: this._db["tb_tipomodulo"],
                as:'tb_tipomodulo'
            }] });

        return result
    }

    update(idmod, entity) {
        entity.idmod = parseInt(idmod);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idmod } });
    }

    destroy(idmod) {
        return this._db[this.entity].destroy({ where: { idmod } });
    }
}

module.exports = PrioridadRepository;