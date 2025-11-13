const validateObjectId = (req, res, next) => {
  const mongoose = require('mongoose');
  const { id, userId, classId, routineId, instructorId } = req.params;
  
  const ids = [id, userId, classId, routineId, instructorId].filter(Boolean);
  
  for (const id of ids) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido'
      });
    }
  }
  
  next();
};

module.exports = { validateObjectId };