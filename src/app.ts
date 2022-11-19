import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';

import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import listProductsRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/login', loginRoutes);
app.use('/orders', listProductsRoutes);

app.use(httpErrorMiddleware);

export default app;
