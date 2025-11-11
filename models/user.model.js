const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'instructor', 'admin'],
    default: 'user'
  },
  profile: {
    phone: String,
    age: Number,
    gender: {
      type: String,
      enum: ['masculino', 'femenino', 'otro', 'prefiero-no-decir']
    },
    weight: Number, // kg
    height: Number, // cm
    imageUrl: String
  },
  membershipStatus: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  membershipExpiry: Date,
  assignedRoutines: [{
    routine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Routine'
    },
    assignedAt: {
      type: Date,
      default: Date.now
    },
    progress: [{
      completedAt: Date,
      duration: Number, // minutos
      notes: String
    }]
  }],
  enrolledClasses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }],
  goals: {
    type: [String],
    enum: ['fuerza', 'hipertrofia', 'resistencia', 'perdida-peso', 'flexibilidad', 'salud-general']
  },
  lastLogin: Date
}, {
  timestamps: true
});

// Método para ocultar password en respuestas JSON
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('User', userSchema);
