const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

module.exports = Tech = mongoose.model('tech', TechSchema);
