const { Router } = require ('express');
const { reelsGet, 
        reelsPatch, 
        reelsPost, 
        reelsPut, 
        reelsDelete } = require ('../controllers/reels');

const router = Router();

router.get('/', reelsGet);

router.put('/:id', reelsPut);

router.post('/', reelsPost);

router.delete('/', reelsDelete);

router.patch('/', reelsPatch);



module.exports = router;