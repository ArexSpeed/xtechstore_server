import express from 'express';
import {getTablets, showTablet, editTablet, addTablet, deleteTablet} from '../controllers/tabletControllers.js'
const router = express.Router();

router.route('/').get(getTablets).post(addTablet)
router.route('/:id').get(showTablet).put(editTablet).delete(deleteTablet)

export default router;