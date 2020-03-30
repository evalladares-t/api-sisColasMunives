

const BaseService = require("./base.service");
class ActionService extends BaseService {
    constructor({ ActionBusiness }) {
        super(ActionBusiness);
    }
}

module.exports = ActionService;