
const BaseRepository = require("./base.repository");

class FranjaHorariaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_franjahoraria");
    }

    index(offset,limit) {
        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idfranjhor'
            ]});
    }

    show(idfranjhor) {
        return this._db[this.entity].findOne({ where: { idfranjhor } });
    }

    update(idfranjhor, entity) {
        //delete entity.createdAt;
        delete entity.updatedAt;
        entity.idfranjhor = parseInt(idfranjhor);
        console.log({idfranjhor,entity});
        return this._db[this.entity].update(entity, { where: { idfranjhor } });
    }

    destroy(idfranjhor) {
        return this._db[this.entity].destroy({ where: { idfranjhor } });
    }
}

module.exports = FranjaHorariaRepository;