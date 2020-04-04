const mapper = require('automapper-js');
const {PrioridadDTO} = require('../dtos');

class PrioridadController {
    constructor({PrioridadService}) {
        this._prioridadService = PrioridadService;
    }

    async index(req,res){
        const {offset,limit}=req.query;
        const result =await this._prioridadService.index(offset,limit);
        let prioridad = result.rows;
        const count = result.count;
        prioridad = prioridad.map(prioridad=> mapper(PrioridadDTO,prioridad));
        return res.json({
                count,
                'data' : prioridad,
        })
    }

    async show(req,res){
        const {id} = req.params;
        let prioridad = await this._prioridadService.show(id);
        prioridad = mapper(PrioridadDTO,prioridad);
        return res.json({
            'data' : prioridad
        })
    }

    async store(req,res){
        const {body} = req;
        const store = await this._prioridadService.store(body);
        const prioridad = mapper(PrioridadDTO,store);
        return res.status(201).json({
            'data' : prioridad
        })
    }

    async update(req,res){
        const {body} = req;
        const {id} = req.params;
        const prioridad = await this._prioridadService.update(id,body);
        return res.status(204).json({
            'data' : prioridad
        })
    }

    async destroy (req,res){
        const {id} = req.params;
        const prioridad = await this._prioridadService.destroy(id);
        return res.status(204).json({
            'data' : prioridad
        })
    }
}

module.exports = PrioridadController;