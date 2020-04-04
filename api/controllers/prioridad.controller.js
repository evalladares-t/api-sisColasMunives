const mapper = require('automapper-js');
const {PrioridadDTO} = require('../dtos');

class PrioridadController {
    constructor({PrioridadService}) {
        this._prioridadService = PrioridadService;
    }

    async index(req,res){
        const {offset,limit}=req.query;
        const {protocol, hostname} = req;

        if(limit){
            if(offset){
                const result = await this._prioridadService.index(offset, limit);
                let prioridad = result.rows;
                const count = result.count;
                prioridad = prioridad.map(prioridad=> mapper(PrioridadDTO,prioridad));
                const resultado = Response(count,parseInt(offset),parseInt(limit),protocol,hostname);
                return res.json({
                    count,
                    previous: resultado.previous,
                    next: resultado.next,
                    'data' : prioridad,
                })
            }
            else{
                const result = await this._prioridadService.index('0', limit);
                let prioridad = result.rows;
                const count = result.count;
                prioridad = prioridad.map(prioridad=> mapper(PrioridadDTO,prioridad));
                const resultado = Response(count,0,parseInt(limit),protocol,hostname);
                return res.json({
                    count,
                    previous: resultado.previous,
                    next: resultado.next,
                    'data' : prioridad,
                })
            }
        }
        else{
            if(offset){
                const result = await this._prioridadService.index(offset, '20');
                let prioridad = result.rows;
                const count = result.count;
                prioridad = prioridad.map(prioridad=> mapper(PrioridadDTO,prioridad));
                const resultado = Response(count,parseInt(offset),20,protocol,hostname);
                return res.json({
                    count,
                    previous: resultado.previous,
                    next: resultado.next,
                    'data' : prioridad,
                })
            }
            else {
                const result = await this._prioridadService.index('0', '20');
                let prioridad = result.rows;
                const count = result.count;
                prioridad = prioridad.map(prioridad=> mapper(PrioridadDTO,prioridad));
                const resultado = Response(count,0,20,protocol,hostname);
                return res.json({
                    count,
                    previous: resultado.previous,
                    next: resultado.next,
                    'data' : prioridad,
                })
            }
        }

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

function Response(count,offset,limit,protocol,hostname){
    if(count>20){
        if(offset>=0){
            if(offset===0){
                const previous = null;
                const next = `${protocol}://${hostname}/api/v1.0/prioridad?offset=${offset+20}&limit=${limit}`;
                return {previous,next}
            }
            if(offset<20 && offset>0){
                const previous = `${protocol}://${hostname}/api/v1.0/prioridad?offset=0&limit=${offset}`;
                const next = `${protocol}://${hostname}/api/v1.0/prioridad?offset=${offset+20}&limit=${limit}`;
                return {previous,next}
            }
            if(offset>=20){
                const previous = `${protocol}://${hostname}/api/v1.0/prioridad?offset=${offset-20}&limit=20`;
                if(count>offset+20) {
                    const next = `${protocol}://${hostname}/api/v1.0/prioridad?offset=${offset + 20}&limit=${limit}`;
                    return {previous, next}
                }
                else {
                    const next = null;
                    return {previous, next}
                }
            }
        }
    }
    else{
        if(offset>=0 && offset<=20){
            if(offset===0){
                const previous = null;
                const next = null;
                return {previous,next}
            }
            if(offset<=20 && offset>0){
                const previous = `${protocol}://${hostname}/api/v1.0/prioridad?offset=0&limit=${offset}`;
                const next = null;
                return {previous,next}
            }
        }
    }

}

module.exports = PrioridadController;