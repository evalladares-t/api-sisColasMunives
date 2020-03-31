const mapper = require("automapper-js");

class BaseBusiness {
    constructor(EntityRepository, entityToMap) {
        this._entityRepository = EntityRepository;
        this.entityToMap = entityToMap;
    }

    async index(offset,limit) {
        const result= await await (this._entityRepository.index(offset,limit));
        const entities = result.rows;
        const count = result.count;
        console.log(count);
        const rows = entities.map(entity => mapper(this.entityToMap, entity.toJSON()));
        return {rows,count};
    }

    async show(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        return mapper(this.entityToMap, entity.toJSON());
    }

    async store(entity) {
        entity = mapper(this.entityToMap, entity);
        const createdEntity = await this._entityRepository.store(entity);
        return mapper(this.entityToMap, createdEntity.toJSON());
    }

    async update(id, entity) {
        entity.id = id;
        entity = mapper(this.entityToMap, entity);
        const updatedEntity = await this._entityRepository.update(id, entity);
        return mapper(this.entityToMap, updatedEntity);
    }

    async destroy(id) {
        return await this._entityRepository.destroy(id);
    }
}

module.exports = BaseBusiness;