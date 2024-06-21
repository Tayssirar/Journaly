const mongoose = require('mongoose');

const CriterionSchema = new mongoose.Schema({
  C1: { type: Number, required: true },
  C2: { type: Number, required: true },
  C3: { type: Number, required: true },
  C4: { type: Number, required: true },
  C5: { type: Number, required: true },
  C6: { type: Number, required: true },
  C7: { type: Number }
});

const NoteSchema = new mongoose.Schema({
  classe: { type: String, required: true },
  evaluationType: { type: String, required: true },
  student: { type: String, required: true },
  recitation: { type: CriterionSchema },
  oral: { type: CriterionSchema},
  lecture: { type: CriterionSchema },
  ecrit: { type: CriterionSchema },
  total: { type: Number }
});

module.exports = mongoose.model('Note', NoteSchema);
