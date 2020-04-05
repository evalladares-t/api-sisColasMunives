const {Router} = require('express');


module.exports = function ({TipoModuloController}) {
    const router = Router();

    router.get('/', TipoModuloController.index.bind(TipoModuloController));
    router.get('/:id', TipoModuloController.show.bind(TipoModuloController));
    router.get('/:id', TipoModuloController.show.bind(TipoModuloController));
    router.post('/', TipoModuloController.store.bind(TipoModuloController));
    router.put('/:id', TipoModuloController.update.bind(TipoModuloController));
    router.delete('/:id', TipoModuloController.destroy.bind(TipoModuloController));

    return router;
};
