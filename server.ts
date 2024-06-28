import express from 'express';
import { buildRouter } from '@adminjs/express';

const app = express();

// Use dynamic import for AdminJS
import('./src/admin.config')
  .then((adminJsOptions) => {
    const AdminJS = require('adminjs').default;
    const adminJs = new AdminJS(adminJsOptions.default); // Adjust as per AdminJS instantiation
    const router = buildRouter(adminJs);

    app.use(adminJs.options.rootPath, router);

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error loading admin.config.ts:', error);
  });
