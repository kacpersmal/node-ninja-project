import express from 'express';

import config from 'config';
import bunyan, { LoggerOptions } from 'bunyan';

// !!
import * as defaultConfig from './config/default.json';
import * as prodConfig from './config/production.json';

import ApplicationRoutes from './src/controllers/';
import { ErrorHandler } from './src/middleware';
const bunyanConfig: LoggerOptions = {
  name: 'NinjaApp',
};

export const logger = bunyan.createLogger(bunyanConfig);

const port = config.get('Server.port');

logger.info('Server starting...');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ApplicationRoutes);
app.use(ErrorHandler);
app.listen(port, () => {
  logger.info(`Server started at port: ${port}`);
});
