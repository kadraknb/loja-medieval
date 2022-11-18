import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

export default app;
