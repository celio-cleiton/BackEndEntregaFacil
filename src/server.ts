import mongoose from 'mongoose';
import config from './config';
import app from './app';

// Conexão com o banco de dados MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    // Inicia o servidor
    app.listen(config.port, () => {
      console.log(`Server listening at http://localhost:${config.port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
