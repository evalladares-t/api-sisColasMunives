class BaseRepository {

    constructor(db, entity) {
        this._db = db;
        this.entity = entity;
    }

    index(offset,limit) {

        return this._db[this.entity].findAndCountAll({
            offset,limit});
    }

    store(entity) {
        return this._db[this.entity].create(entity);
    }
}

module.exports = BaseRepository;