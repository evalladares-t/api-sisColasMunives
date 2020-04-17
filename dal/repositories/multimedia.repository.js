
const BaseRepository = require("./base.repository");
class MultimediaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_multimedia");
    }

    index(offset,limit) {
        const result = this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idmultim'
            ]
        });
        return result
    }

    show(idmultim) {
        const result = this._db[this.entity].findOne({ where: { idmultim }, include:[{
                model: this._db["tb_usuario"],
                as:'tb_usuario'
            }] });

        return result
    }

    update(idmultim, entity) {
        entity.idmultim = parseInt(idmultim);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idmultim } });
    }

    destroy(idmultim) {
        return this._db[this.entity].destroy({ where: { idmultim } });
    }
}

module.exports = MultimediaRepository;