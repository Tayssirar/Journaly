const mongoose = require('mongoose');

const RapportSchema = new mongoose.Schema({
  region: { type: String, required: true },
  school: { type: String, required: true },
  teacherName: { type: String, required: true },
  date: { type: Date, required: true },
  numRapport: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  classe: { type: String, required: true },
  objectifVisite: { type: String, required: true },
  remarque1: { type: String },
  remarque2: { type: String },
  remarque3: { type: String },
  remarque4: { type: String },
  remarque5: { type: String },
  remarque6: { type: String },
  numModule: { type: String },
  theme: { type: String },
  journee: { type: String },
  descriptionActivite1: { type: String },
  remarqueActivite1: { type: String },
  descriptionActivite2: { type: String },
  remarqueActivite2: { type: String },
  descriptionComportement: { type: String },
  remarqueComportement: { type: String },
  objectifVisiteProchaine: { type: String },
  notes: { type: Map, of: String },
  apprentissageChecked: { type: Boolean },
  journeePalierChecked: { type: Boolean },
  evaluationChecked: { type: Boolean },
  remediationChecked: { type: Boolean },
  status: { type: String, enum: ['public', 'private'], default: 'private' } // Ajout du champ status
});

module.exports = mongoose.model('Rapport', RapportSchema);
