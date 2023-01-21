const createSubscription = async (req, res) => {
  res.send('Create subscription');
};

const updateSubscription = async (req, res) => {
  res.send('Update subscription');
};

const deleteSubscription = async (req, res) => {
  res.send('Delete subscription');
};

const getAllSubscriptions = async (req, res) => {
  res.send('Get all subscriptions');
};

export {
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getAllSubscriptions,
};
