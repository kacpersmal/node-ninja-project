import { createValidator } from 'express-joi-validation';

const GlobalValidator = createValidator({
  passError: true,
});

export default GlobalValidator;
