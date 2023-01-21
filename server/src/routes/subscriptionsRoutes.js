import express from 'express';
import {
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getAllSubscriptions,
} from '../controllers/subscriptionsController.js';

const router = express.Router();

router.route('/').post(createSubscription).get(getAllSubscriptions);
router.route('/:id').patch(updateSubscription).delete(deleteSubscription);

export default router;
