import express from "express";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/typeorm";
import { PrismaClient } from "@prisma/client";

AdminJS.registerAdapter({ Database, Resource });

const prisma = new PrismaClient();

const startAdminJS = async () => {
  const app = express();

  const adminJs = new AdminJS({
    resources: [
      {
        resource: prisma.product,
        options: { properties: { id: { isVisible: false } } },
      },
      {
        resource: prisma.category,
        options: { properties: { id: { isVisible: false } } },
      },
    ],
    rootPath: "/admin",
  });

  const router = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router);

  app.listen(3000, () => {
    console.log("AdminJS is running on http://localhost:3000/admin");
  });
};

startAdminJS();
