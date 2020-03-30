
class BaseService {
    constructor(EntityBusiness) {
        this._entityBusiness = EntityBusiness;
    }

    async index() {
        const entities = await this._entityBusiness.index();
        return entities;
    }

    async show(id) {
        const entity = await this._entityBusiness.show(id);
        return entity;
    }

    async store(entity) {
        const createdEntity = await this._entityBusiness.store(entity);
        return createdEntity;
    }

    async update(id, entity) {
        const updatedEntity = await this._entityBusiness.update(id, entity);
        return updatedEntity;
    }

    async destroy(id) {
        const deletedEntity = await this._entityBusiness.destroy(id);
        return deletedEntity;
    }
}

module.exports = BaseService;