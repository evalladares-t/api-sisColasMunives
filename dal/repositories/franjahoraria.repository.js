
const BaseRepository = require("./base.repository");

class FranjaHorariaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_franjahoraria");
    }
    show(idfranjhor) {
        return this._db[this.entity].findOne({ where: { idfranjhor } });
    }

    update(idfranjhor, entity) {
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idfranjhor } });
    }

    destroy(idfranjhor) {
        return this._db[this.entity].destroy({ where: { idfranjhor } });
    }
}

module.exports = FranjaHorariaRepository;