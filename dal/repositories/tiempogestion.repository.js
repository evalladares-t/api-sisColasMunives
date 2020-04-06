
const BaseRepository = require("./base.repository");

class TiempoGestionRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_tiempogestion");
    }

    index(offset,limit) {

        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idtmpgest'
            ]});
    }


    show(idtmpgest) {
        return this._db[this.entity].findOne({ where: { idtmpgest } });
    }

    update(idtmpgest, entity) {
        entity.idtmpgest = parseInt(idtmpgest);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idtmpgest } });
    }

    destroy(idtmpgest) {
        return this._db[this.entity].destroy({ where: { idtmpgest } });
    }
}

module.exports = TiempoGestionRepository;