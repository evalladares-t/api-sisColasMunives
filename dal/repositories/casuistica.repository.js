
const BaseRepository = require("./base.repository");
class CasuisticaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_casuistica");
    }

    index(offset,limit) {
        const result = this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idcasuis'
            ]
        });
        return result
    }

    show(idcasuis) {
        const result = this._db[this.entity].findOne({ where: { idcasuis }, include:[{
                model: this._db["tb_subcasuistica"],
                as:'tb_subcasuistica',
                include:[{
                    model: this._db["tb_prioridad"],
                    as:'tb_prioridad'
                }]
            }] });

        return result
    }

    update(idcasuis, entity) {
        entity.idcasuis = parseInt(idcasuis);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idcasuis } });
    }

    destroy(idcasuis) {
        return this._db[this.entity].destroy({ where: { idcasuis } });
    }
}

module.exports = CasuisticaRepository;