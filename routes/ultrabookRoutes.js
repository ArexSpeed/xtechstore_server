import express from 'express';
import {getUltrabooks, showUltrabook, editUltrabook, addUltrabook, deleteUltrabook} from '../controllers/ultrabookControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getUltrabooks).post(addUltrabook)
router.route('/:id').get(showUltrabook).put(editUltrabook).delete(deleteUltrabook)

export default router;