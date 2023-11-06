import mongoose from "mongoose";

const { Schema } = mongoose;


const userToAddressSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    accountAddress: {
      type: String,
      required: true,
      unique: true
    },
    tokenId: {
      type: String,
    },
    txhash: {
      type: String,
    },
    timestamp: {
      type: String,
    }
  });
  
export const UserToAddressData =  mongoose.models.UserToAddress || mongoose.model('UserToAddress', userToAddressSchema);



const questionSchema = new mongoose.Schema({
  subject: {
      type: String,
      required: true
  },
  question: {
      type: String,
      required: true
  },
  options: {
      type: [String],
      required: true
  },
  correctAnswer: {
      type: String,
      required: true
  }
});

export const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

const signUser = new mongoose.Schema({
  email: String,
  password: String,
});
export const signinUser = mongoose.models.signUser || mongoose.model('signUser', signUser);


const levelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  levelNumber: { type: Number, required: true },
  percentage: { type: Number, required: true, default: 0 },
  isLocked: { type: Boolean, required: true, default: false }
});

const lessonprogress = new mongoose.Schema({
  module: { type: Number, default: 1 },
  lesson: { type: Number, default: 1 },
});


const userProgressSchema = new mongoose.Schema({
  username: { type: String, required: true },
  lessons: { type: Number, default: 1 },
  levels: [levelSchema],
  lessonprogress: lessonprogress
});

export const UserProgress = mongoose.models.UserProgress || mongoose.model('UserProgress', userProgressSchema);



const videoSchema = new mongoose.Schema({
  lesson: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  lessons: [videoSchema],
});

export const Courses = mongoose.models.Courses || mongoose.model('Courses', courseSchema);