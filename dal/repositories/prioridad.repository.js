
const BaseRepository = require("./base.repository");

class PrioridadRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_prioridad");
    }
    show(idpriord) {
        return this._db[this.entity].findOne({ where: { idpriord } });
    }

    update(idpriord, entity) {
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idpriord } });
    }

    destroy(idpriord) {
        return this._db[this.entity].destroy({ where: { idpriord } });
    }
}

module.exports = PrioridadRepository;