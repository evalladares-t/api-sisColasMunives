
const BaseRepository = require("./base.repository");

class StdAtencionRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_estadoatencion");
    }

    index(offset,limit) {

        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idstdaten'
            ]});
    }

    show(idstdaten) {
        return this._db[this.entity].findOne({ where: { idstdaten } });
    }

    update(idstdaten, entity) {
        entity.idstdaten = parseInt(idstdaten);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idstdaten } });
    }

    destroy(idstdaten) {
        return this._db[this.entity].destroy({ where: { idstdaten } });
    }
}

module.exports = StdAtencionRepository;