
const BaseService = require("./base.service");

class MultimediaService extends BaseService {
    constructor({ MultimediaBusiness }) {
        super(MultimediaBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = MultimediaService;