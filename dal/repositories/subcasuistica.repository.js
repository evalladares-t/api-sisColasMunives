
const BaseRepository = require("./base.repository");
class SubcasuisticaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_subcasuistica");
    }

    index(offset,limit) {
        const result = this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idscas'
            ]
        });
        return result
    }

    show(idscas) {
        const result = this._db[this.entity].findOne({ where: { idscas }, include:[{
                model: this._db["tb_prioridad"],
                as:'tb_prioridad'
            }] });

        return result
    }

    update(idscas, entity) {
        entity.idscas = parseInt(idscas);
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { idscas } });
    }

    destroy(idscas) {
        return this._db[this.entity].destroy({ where: { idscas } });
    }
}

module.exports = SubcasuisticaRepository;