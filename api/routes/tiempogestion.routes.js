const {Router} = require('express');


module.exports = function ({TiempoGestionController}) {
    const router = Router();

    router.get('/', TiempoGestionController.index.bind(TiempoGestionController));
    router.get('/:id', TiempoGestionController.show.bind(TiempoGestionController));
    router.get('/:id', TiempoGestionController.show.bind(TiempoGestionController));
    router.post('/', TiempoGestionController.store.bind(TiempoGestionController));
    router.put('/:id', TiempoGestionController.update.bind(TiempoGestionController));
    router.delete('/:id', TiempoGestionController.destroy.bind(TiempoGestionController));

    return router;
};
