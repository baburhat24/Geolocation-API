import express from 'express';
import { getGeolocation } from '../controllers/geoController.js';

const router = express.Router();

router.get('/geolocation', getGeolocation);

export default router;
