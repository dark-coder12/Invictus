const mongoose = require('mongoose');

const mcqListSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  category: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      answer: { type: String, required: true }
    }
  ]
});

const mcqList = mongoose.model('MCQList', mcqListSchema, 'mcqList');

module.exports = mcqList;