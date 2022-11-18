import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';
import listProductsRoutes from './routes/list.products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', listProductsRoutes);

export default app;
