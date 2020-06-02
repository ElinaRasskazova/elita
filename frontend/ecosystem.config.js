const getDotenvConfig = require('./webpack/utils/getDotenvConfig');

const {PM2_PROCESS_NAME} = getDotenvConfig();

module.exports = {
  apps: [
    {
      name: PM2_PROCESS_NAME,
      script: 'server/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
