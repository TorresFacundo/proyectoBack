const User = require('../models/user.model');

//Metodos propios de auth
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

//Metodo que se usa de un modo para usuario comun y de otro para administradores
exports.updateById = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

//Metodos de administración
exports.findAll = async () => {
  return await User.find();
};

exports.deleteById = async (id) => {
  return await User.findByIdAndDelete(id);
};