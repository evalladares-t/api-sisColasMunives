const {Router} = require('express');


module.exports = function ({UsuarioController}) {
    const router = Router();

    router.get('/', UsuarioController.index.bind(UsuarioController));
    router.get('/:id', UsuarioController.showdep.bind(UsuarioController));
    router.post('/', UsuarioController.store.bind(UsuarioController));
    router.patch('/:id', UsuarioController.update.bind(UsuarioController));
    router.delete('/:id', UsuarioController.destroy.bind(UsuarioController));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};
