const equipmentService = require('../services/elementosService');

exports.createEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.createEquipment(req.body);
    res.status(201).json({ success: true, data: equipment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.getAllEquipment(req.query);
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await equipmentService.getEquipmentById(req.params.id);
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.updateEquipment(req.params.id, req.body);
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteEquipment = async (req, res) => {
  try {
    await equipmentService.deleteEquipment(req.params.id);
    res.json({ success: true, message: 'Equipamiento eliminado' });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const equipment = await equipmentService.getByCategory(req.params.category);
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
