const equipmentRepository = require('../repositories/elementosRepository');

exports.createEquipment = async (data) => {
  return await equipmentRepository.create(data);
};

exports.getAllEquipment = async (query) => {
  const { category, isAvailable } = query;
  const filter = {};

  if (category) filter.category = category;
  if (isAvailable !== undefined) filter.isAvailable = isAvailable === 'true';

  return await equipmentRepository.findAll(filter);
};

exports.getEquipmentById = async (id) => {
  const equipment = await equipmentRepository.findById(id);
  if (!equipment) throw new Error('Equipamiento no encontrado');
  return equipment;
};

exports.updateEquipment = async (id, data) => {
  const equipment = await equipmentRepository.updateById(id, data);
  if (!equipment) throw new Error('Equipamiento no encontrado');
  return equipment;
};

exports.deleteEquipment = async (id) => {
  const equipment = await equipmentRepository.deleteById(id);
  if (!equipment) throw new Error('Equipamiento no encontrado');
  return equipment;
};

exports.getByCategory = async (category) => {
  return await equipmentRepository.findByCategory(category);
};
