const mapper = require('automapper-js');
const {ActionDto} = require('../dtos');

class UserController {
    constructor({ActionService}) {
        this._actionService = ActionService;
    }

    async index(req,res){
        let actions = await this._actionService.index();
        actions = actions.map(action=> mapper(ActionDto,action));
        return res.json({
            'count':actions.length,
            'data' : actions
        })
    }

    async show(req,res){
        const {id} = req.params;
        let actions = await this._actionService.show(id);
        actions = mapper(ActionDto,actions);
        return res.json({
            'data' : actions
        })
    }

    async store(req,res){
        const {body} = req;
        const store = await this._actionService.store(body);
        const action = mapper(ActionDto,store);
        return res.status(201).json({
            'data' : action
        })
    }

    async update(req,res){
        const {body} = req;
        const {id} = req.params;
        const action = await this._actionService.update(id,body);
        return res.status(204).json({
            'data' : action
        })
    }

    async destroy (req,res){
        const {id} = req.params;
        const action = await this._actionService.destroy(id);
        return res.status(204).json({
            'data' : action
        })
    }
}

module.exports = UserController;