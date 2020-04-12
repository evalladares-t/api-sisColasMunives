const {Router} = require('express');


module.exports = function ({SubcasuisticaController}) {
    const router = Router();

    router.get('/', SubcasuisticaController.index.bind(SubcasuisticaController));
    router.get('/:id', SubcasuisticaController.showdep.bind(SubcasuisticaController));
    router.post('/', SubcasuisticaController.store.bind(SubcasuisticaController));
    router.patch('/:id', SubcasuisticaController.update.bind(SubcasuisticaController));
    router.delete('/:id', SubcasuisticaController.destroy.bind(SubcasuisticaController));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};
