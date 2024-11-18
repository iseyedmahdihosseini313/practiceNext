import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          minlength: 3,
          maxlength: 20,
          lowercase: true,
     },
     password: {
          type: String,
          required: true,
          minlength: 8,
     },
     email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
     },
     phone: {
          type: String,
          required: true,
          unique: true,
          trim: true,
     },
     fullname: {
          type: String,
          required: true,
          trim: true,
          lowercase: true,
     }
});
export default mongoose.model('User', userSchema);