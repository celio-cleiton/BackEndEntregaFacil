import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes'
import companyRoutes from './routes/companyRoutes';
import orderRoutes from './routes/orderRoutes';
import errorHandler from './middlewares/errorHandler';
import authMiddleware from './middlewares/authMiddleware';
import morgan from 'morgan';
import config from './config';

const app = express();

// Middleware para permitir requisições de origens diferentes (CORS)
app.use(cors());

// Middleware para logging
app.use(morgan('dev'));

// Middleware para parsing de JSON no corpo das requisições
app.use(express.json());

// Middleware de autenticação (se necessário para todas as rotas)
// app.use(authMiddleware);

// Rotas
app.use('/api/products', authMiddleware, productRoutes);
app.use('/api/companies', authMiddleware, companyRoutes);
app.use('/api/orders', authMiddleware, orderRoutes);
app.use('/api/users', authMiddleware, userRoutes); // Rota para usuários
app.use('/api/admins', authMiddleware, adminRoutes); // Rota para administradores

// Middleware para tratamento de erros
app.use(errorHandler);

const port = config.port;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

export default app;
