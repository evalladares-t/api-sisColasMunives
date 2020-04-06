const {Router} = require('express');


module.exports = function ({Stdatencioncontroller}) {
    const router = Router();

    router.get('/', Stdatencioncontroller.index.bind(Stdatencioncontroller));
    router.get('/:id', Stdatencioncontroller.show.bind(Stdatencioncontroller));
    router.get('/:id', Stdatencioncontroller.show.bind(Stdatencioncontroller));
    router.post('/', Stdatencioncontroller.store.bind(Stdatencioncontroller));
    router.put('/:id', Stdatencioncontroller.update.bind(Stdatencioncontroller));
    router.delete('/:id', Stdatencioncontroller.destroy.bind(Stdatencioncontroller));

    return router;
};