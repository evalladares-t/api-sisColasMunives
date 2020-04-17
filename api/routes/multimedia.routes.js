const {Router} = require('express');


module.exports = function ({MultimediaController}) {
    const router = Router();

    router.get('/', MultimediaController.index.bind(MultimediaController));
    router.get('/:id', MultimediaController.showdep.bind(MultimediaController));
    router.post('/', MultimediaController.store.bind(MultimediaController));
    router.patch('/:id', MultimediaController.update.bind(MultimediaController));
    router.delete('/:id', MultimediaController.destroy.bind(MultimediaController));
    router.use('/*', (req,res)=>{
        res.json({'message':'Recurso no encotrado'})});
    return router;
};
