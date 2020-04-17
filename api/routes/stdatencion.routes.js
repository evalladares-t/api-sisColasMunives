const {Router} = require('express');


module.exports = function ({Stdatencioncontroller}) {
    const router = Router();

    router.get('/', Stdatencioncontroller.index.bind(Stdatencioncontroller));
    router.get('/:id', Stdatencioncontroller.show.bind(Stdatencioncontroller));
    router.get('/:id', Stdatencioncontroller.show.bind(Stdatencioncontroller));
    router.post('/', Stdatencioncontroller.store.bind(Stdatencioncontroller));
    router.patch('/:id', Stdatencioncontroller.update.bind(Stdatencioncontroller));
    router.delete('/:id', Stdatencioncontroller.destroy.bind(Stdatencioncontroller));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};