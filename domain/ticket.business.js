const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const { FranjaHoraria,Prioridad,Ticket } = require("./models");

class TicketBusiness extends BaseBusiness {
    constructor({ TicketRepository }) {
        super(TicketRepository, Ticket);
    }

    async showdep(id) {
        const entity = await this._entityRepository.show(id);
        if (!entity) return null;
        const ticket = mapper(this.entityToMap, entity.toJSON());
        const prioridad = mapper(Prioridad, entity.tb_prioridad.toJSON());
        const franjahoraria = mapper(FranjaHoraria, entity.tb_franjahoraria.toJSON());
        return {ticket,prioridad,franjahoraria}
    }
}

module.exports = TicketBusiness;