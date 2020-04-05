
const BaseRepository = require("./base.repository");

class TipomoduloRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_tipomodulo");
    }

    index(offset,limit) {

        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idtmod'
            ]});
    }

    show(idtmod) {
        return this._db[this.entity].findOne({ where: { idtmod } });
    }

    update(idtmod, entity) {
        entity.idtmod = parseInt(idtmod);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idtmod } });
    }

    destroy(idtmod) {
        return this._db[this.entity].destroy({ where: { idtmod } });
    }
}

module.exports = TipomoduloRepository;