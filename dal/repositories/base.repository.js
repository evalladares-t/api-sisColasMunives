class BaseRepository {
    constructor(db, entity) {
        this._db = db;
        this.entity = entity;
    }

    index() {
        return this._db[this.entity].findAll();
    }

    show(id) {
        return this._db[this.entity].findOne({ where: { id } });
    }

    store(entity) {
        return this._db[this.entity].create(entity);
    }

    update(id, entity) {
        delete entity.createdAt;
        delete entity.updatedAt;
        return this._db[this.entity].update(entity, { where: { id } });
    }

    destroy(id) {
        return this._db[this.entity].destroy({ where: { id } });
    }
}

module.exports = BaseRepository;