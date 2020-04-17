const BaseController = require("./base.controller");
const {UsuarioDTO,MultimediaDTO} = require('../dtos');
const Resource = "multimedia";
const mapper = require('automapper-js');
class MultimediaController extends BaseController{
    constructor({MultimediaService}) {
        super(MultimediaService,MultimediaDTO,Resource)
    }

    async showdep(req,res){
        const {id} = req.params;
        let result = await this._serviceBase.showdep(id);
        if(!result){
            res.json({'message':'Recurso no encotrado'})
        }
        const multimedia = mapper(this._DTO,result.multimedia);
        const usuario = mapper(UsuarioDTO,result.usuario);

        return res.json({
            multimedia,
            usuario
        })
    }

}

module.exports = MultimediaController;