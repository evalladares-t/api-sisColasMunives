const {Router} = require('express');


module.exports = function ({CasuisticaController}) {
    const router = Router();

    router.get('/', CasuisticaController.index.bind(CasuisticaController));
    router.get('/:id', CasuisticaController.showdep.bind(CasuisticaController));
    router.post('/', CasuisticaController.store.bind(CasuisticaController));
    router.patch('/:id', CasuisticaController.update.bind(CasuisticaController));
    router.delete('/:id', CasuisticaController.destroy.bind(CasuisticaController));

    return router;
};
