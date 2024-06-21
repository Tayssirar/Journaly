const mongoose = require('mongoose');

const AssistantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  schools: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  }],
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Assistant', AssistantSchema);

