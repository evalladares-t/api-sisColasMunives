
const BaseRepository = require("./base.repository");

class StdAtencionRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_estadoregistro");
    }

    index(offset,limit) {

        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idstdregis'
            ]});
    }

    show(idstdregis) {
        return this._db[this.entity].findOne({ where: { idstdregis } });
    }

    update(idstdregis, entity) {
        entity.idstdregis = parseInt(idstdregis);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idstdregis } });
    }

    destroy(idstdregis) {
        return this._db[this.entity].destroy({ where: { idstdregis } });
    }
}

module.exports = StdAtencionRepository;