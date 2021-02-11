import express from 'express';
import {getAccessories, showAccessory, addAccessory, editAccessory, deleteAccessory} from '../controllers/accessoriesControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getAccessories).post(addAccessory)
router.route('/:id').get(showAccessory).put(editAccessory).delete(deleteAccessory)

export default router;