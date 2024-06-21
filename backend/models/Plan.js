const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: {
    contenu: { type: String, required: true },
    supports: { type: String }
  }
});

const JourneeSchema = new mongoose.Schema({
  sections: [SectionSchema]
});

const PlanSchema = new mongoose.Schema({
  classe: { type: String, required: true },
  subTheme: { type: String, required: true },
  education_a: { type: String, required: true },
  journées: { type: Map, of: JourneeSchema },
  status: { type: String, enum: ['public', 'private'], default: 'private' },
});

module.exports = mongoose.model('Plan', PlanSchema);
