import express from 'express';
import AddApplicationRoutes from './src/routes';
import GlobalErrorHandler from './src/middleware/GlobalErrorHandler';
import Config from './config/Config';

const app = express();
const port = Config.Server.Port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AddApplicationRoutes(app);

app.use(GlobalErrorHandler);

app.listen(port, () => {
  console.log(`Server started at port: ${port}.`);
});
