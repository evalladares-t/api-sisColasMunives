const {Router} = require('express');


module.exports = function ({StdRegistroController}) {
    const router = Router();

    router.get('/', StdRegistroController.index.bind(StdRegistroController));
    router.get('/:id', StdRegistroController.show.bind(StdRegistroController));
    router.get('/:id', StdRegistroController.show.bind(StdRegistroController));
    router.post('/', StdRegistroController.store.bind(StdRegistroController));
    router.patch('/:id', StdRegistroController.update.bind(StdRegistroController));
    router.delete('/:id', StdRegistroController.destroy.bind(StdRegistroController));

    return router;
};
