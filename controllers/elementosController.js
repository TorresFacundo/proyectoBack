const Equipment = require('../models/elementos.model');

exports.createEquipment = async (req, res) => {
  try {
    const equipment = new Equipment(req.body);
    await equipment.save();
    res.status(201).json({ success: true, data: equipment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAllEquipment = async (req, res) => {
  try {
    const { category, isAvailable } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isAvailable !== undefined) filter.isAvailable = isAvailable === 'true';
    
    const equipment = await Equipment.find(filter);
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    
    if (!equipment) {
      return res.status(404).json({ success: false, error: 'Equipamiento no encontrado' });
    }
    
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!equipment) {
      return res.status(404).json({ success: false, error: 'Equipamiento no encontrado' });
    }
    
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id);
    
    if (!equipment) {
      return res.status(404).json({ success: false, error: 'Equipamiento no encontrado' });
    }
    
    res.json({ success: true, message: 'Equipamiento eliminado' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Obtener por categoría
exports.getByCategory = async (req, res) => {
  try {
    const equipment = await Equipment.find({ 
      category: req.params.category 
    });
    
    res.json({ success: true, data: equipment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
