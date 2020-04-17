const {Router} = require('express');


module.exports = function ({TipoModuloController}) {
    const router = Router();

    router.get('/', TipoModuloController.index.bind(TipoModuloController));
    router.get('/:id', TipoModuloController.show.bind(TipoModuloController));
    router.get('/:id', TipoModuloController.show.bind(TipoModuloController));
    router.post('/', TipoModuloController.store.bind(TipoModuloController));
    router.patch('/:id', TipoModuloController.update.bind(TipoModuloController));
    router.delete('/:id', TipoModuloController.destroy.bind(TipoModuloController));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};
