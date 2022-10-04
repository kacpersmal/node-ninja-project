const env = process.env.NODE_ENV;

const Dev = {
  Server: {
    Port: 3000,
  },
};

const Prod = {
  Server: {
    Port: 3000,
  },
};

const Config = env === 'production' ? Prod : Dev;

export default Config;
