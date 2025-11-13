const Equipment = require('../models/elementos.model');

exports.create = async (data) => {
  return await Equipment.create(data);
};

exports.findAll = async (filter = {}) => {
  return await Equipment.find(filter);
};

exports.findById = async (id) => {
  return await Equipment.findById(id);
};

exports.updateById = async (id, data) => {
  return await Equipment.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

exports.deleteById = async (id) => {
  return await Equipment.findByIdAndDelete(id);
};

exports.findByCategory = async (category) => {
  return await Equipment.find({ category });
};
