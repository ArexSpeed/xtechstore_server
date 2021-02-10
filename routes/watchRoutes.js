import express from 'express';
import {getWatches, showWatch, editWatch, addWatch, deleteWatch} from '../controllers/watchControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getWatches).post(addWatch)
router.route('/:id').get(showWatch).put(editWatch).delete(deleteWatch)

export default router;