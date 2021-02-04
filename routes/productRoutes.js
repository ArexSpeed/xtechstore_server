import express from 'express';
import {getProducts, showProduct} from '../controllers/productControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getProducts)
router.route('/:id').get(showProduct)

export default router;