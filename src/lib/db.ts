import mongoose from 'mongoose';

const connectDB = async () => {
     if (mongoose.connections[0].readyState) {
          return;
     }

     try {
          if (!process.env.MONGODB_URI) {
               throw new Error(
                    'MONGODB_URI is not defined in environment variables'
               );
          }

          await mongoose.connect(process.env.MONGODB_URI);
          console.log('Connected to MongoDB');
     } catch (error) {
          console.log('Error connecting to MongoDB:', error);
     }
};
export default connectDB;
