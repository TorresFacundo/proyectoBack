const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.getUserById = async (id) => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

exports.updateUser = async (id, data) => {
  const user = await userRepository.updateById(id, data);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

exports.deleteUser = async (id) => {
  const user = await userRepository.deleteById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};