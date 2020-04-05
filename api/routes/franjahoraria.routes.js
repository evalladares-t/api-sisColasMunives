const {Router} = require('express');


module.exports = function ({Franjahorariacontroller}) {
    const router = Router();

    router.get('/', Franjahorariacontroller.index.bind(Franjahorariacontroller));
    router.get('/:id', Franjahorariacontroller.show.bind(Franjahorariacontroller));
    router.get('/:id', Franjahorariacontroller.show.bind(Franjahorariacontroller));
    router.post('/', Franjahorariacontroller.store.bind(Franjahorariacontroller));
    router.put('/:id', Franjahorariacontroller.update.bind(Franjahorariacontroller));
    router.delete('/:id', Franjahorariacontroller.destroy.bind(Franjahorariacontroller));

    return router;
};