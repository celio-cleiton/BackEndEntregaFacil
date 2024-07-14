import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(mongoUri, {
      ssl: true, // Habilita SSL/TLS
      authSource: 'admin', // Fonte de autenticação
      user: process.env.MONGO_USER, // Usuário do MongoDB
      pass: process.env.MONGO_PASSWORD, // Senha do MongoDB
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Encerra o processo com erro
  }
};

connectToDatabase();

export default connectToDatabase
