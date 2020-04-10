
const BaseService = require("./base.service");

class TicketService extends BaseService {
    constructor({ TicketBusiness }) {
        super(TicketBusiness);
    }

    async showdep(id) {
        const entity = await this._entityBusiness.showdep(id);
        return entity;
    }
}

module.exports = TicketService;