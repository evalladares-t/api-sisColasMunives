
const BaseBusiness = require("./base.business");
const { Action } = require("./models");

class StudentBusiness extends BaseBusiness {
    constructor({ ActionRepository }) {
        super(ActionRepository, Action);
    }
}

module.exports = StudentBusiness;