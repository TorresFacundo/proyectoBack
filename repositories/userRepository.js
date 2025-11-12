const User = require('../models/user.model');

exports.findByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findByEmailWithPassword = async (email) => {
  return await User.findOne({ email }).select('+password');
};

exports.create = async (data) => {
  return await User.create(data);
};

exports.save = async (user) => {
  return await user.save();
};

exports.findById = async (id) => {
  return await User.findById(id);
};

exports.updateById = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};
