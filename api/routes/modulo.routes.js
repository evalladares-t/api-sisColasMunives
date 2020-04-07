const {Router} = require('express');


module.exports = function ({ModuloController}) {
    const router = Router();

    router.get('/', ModuloController.index.bind(ModuloController));
    router.get('/:id', ModuloController.showdep.bind(ModuloController));
    router.post('/', ModuloController.store.bind(ModuloController));
    router.patch('/:id', ModuloController.update.bind(ModuloController));
    router.delete('/:id', ModuloController.destroy.bind(ModuloController));

    return router;
};
