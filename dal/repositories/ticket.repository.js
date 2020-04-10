
const BaseRepository = require("./base.repository");

class FranjaHorariaRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "tb_ticket");
    }

    index(offset,limit) {
        return this._db[this.entity].findAndCountAll({
            offset,limit,order:[
                'idtick'
            ]});
    }

    show(idtick) {
        const result = this._db[this.entity].findOne({ where: { idtick }, include:[{
                model: this._db["tb_prioridad"],
                as:'tb_prioridad'
            },{
                model: this._db["tb_franjahoraria"],
                as:'tb_franjahoraria'
            }] });

        return result
    }

    update(idtick, entity) {
        //delete entity.createdAt;
        delete entity.updatedAt;
        entity.idtick = parseInt(idtick);
        console.log({idtick,entity});
        return this._db[this.entity].update(entity, { where: { idtick } });
    }

    destroy(idtick) {
        return this._db[this.entity].destroy({ where: { idtick } });
    }
}

module.exports = FranjaHorariaRepository;