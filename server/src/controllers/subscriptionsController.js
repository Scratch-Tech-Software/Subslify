import Subscription from '../models/Subscription.ts';
import { StatusCodes } from 'http-status-codes';
import { UnAuthenticatedError } from '../errors/index.js';

const createSubscription = async (req, res) => {
  const { name, price, frequency, startDate } = req.body;
  const user = req.user.id;
  if (!user) {
    throw new UnAuthenticatedError('User not found');
  }

  await Subscription.create({
    name,
    price,
    frequency,
    startDate,
    user,
  });

  res.status(StatusCodes.CREATED).json({ message: 'Subscription created' });
};

const updateSubscription = async (req, res) => {
  res.send('Update subscription');
};

const deleteSubscription = async (req, res) => {
  res.send('Delete subscription');
};

const getSubscriptions = async (req, res) => {
  const user = req.user.id;
  const filter = {
    user,
    ...req.query, // TODO: sanitize query
  };

  const data = await Subscription.find(filter).exec();

  const subscriptions = data.map((el) => ({
    name: el.name,
    price: el.price,
    frequency: el.frequency,
    status: el.status,
    startDate: el.startDate,
    notes: el.notes,
  }));

  res.status(StatusCodes.OK).json(subscriptions);
};

const getOneSubscription = async (req, res) => {
  res.send('Get one subscription');
};

export {
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getSubscriptions,
  getOneSubscription,
};
