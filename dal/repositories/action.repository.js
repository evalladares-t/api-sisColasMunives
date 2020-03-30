const BaseRepository = require("./base.repository");

class ActionRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "Action");
    }
}

module.exports = ActionRepository;