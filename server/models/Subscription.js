import { Schema, model } from 'mongoose';

const SubscriptionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'paused', 'trial'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  logoUrl: {
    type: String,
  },
  notes: [
    {
      body: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default model('Subscription', SubscriptionSchema);
