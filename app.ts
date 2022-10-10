import express from 'express';
import AddApplicationRoutes from './src/routes';
import GlobalErrorHandler from './src/middleware/GlobalErrorHandler';
import config from 'config';
import bunyan, { LoggerOptions } from 'bunyan';

const bunyanConfig: LoggerOptions = {
  name: 'NinjaApp',
};

export const logger = bunyan.createLogger(bunyanConfig);
const port = config.get('Server.port');

logger.info('Server starting...');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AddApplicationRoutes(app);

app.use(GlobalErrorHandler);

app.listen(port, () => {
  logger.info(`Server started at port: ${port}`);
});
