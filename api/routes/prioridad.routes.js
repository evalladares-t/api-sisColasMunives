const {Router} = require('express');


module.exports = function ({PrioridadController}) {
    const router = Router();

    router.get('/', PrioridadController.index.bind(PrioridadController));
    router.get('/:id', PrioridadController.show.bind(PrioridadController));
    router.post('/', PrioridadController.store.bind(PrioridadController));
    router.patch('/:id', PrioridadController.update.bind(PrioridadController));
    router.delete('/:id', PrioridadController.destroy.bind(PrioridadController));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};
