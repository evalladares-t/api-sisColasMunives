const mapper = require('automapper-js');
const {ActionDto} = require('../dtos');

class UserController {
    constructor({ActionService}) {
        this._actionService = ActionService;
    }

    async index(req,res){
        const offset = req.query.offset;
        const limit = req.query.limit;
        const result =await this._actionService.index(offset,limit);
        let actions = result.rows;
        const count = result.count;
        console.log(count);
        actions = actions.map(action=> mapper(ActionDto,action));
        return res.json({
            count,
            'data' : actions,
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