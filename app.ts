import express from 'express';
import AddApplicationRoutes from './src/routes';
import GlobalErrorHandler from './src/middleware/GlobalErrorHandler';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

AddApplicationRoutes(app);

app.use(GlobalErrorHandler)

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

