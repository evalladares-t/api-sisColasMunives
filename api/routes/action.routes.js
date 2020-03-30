const {Router} = require('express');

module.exports = function ({ActionController}) {
    const router = Router();

    router.get('/', ActionController.index.bind(ActionController));
    router.get('/:id', ActionController.show.bind(ActionController));
    router.post('/', ActionController.store.bind(ActionController));
    router.put('/:id', ActionController.update.bind(ActionController));
    router.delete('/:id', ActionController.destroy.bind(ActionController));

    return router;
};
