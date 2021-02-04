import express from 'express';
import {getPhones, showPhone, editPhone, addPhone, deletePhone} from '../controllers/phoneControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getPhones).post(addPhone)
router.route('/:id').get(showPhone).put(editPhone).delete(deletePhone)

export default router;