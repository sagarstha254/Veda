import AdminJS from "adminjs";
import { buildRouter } from "@adminjs/express";
import { Database, Resource } from "@adminjs/prisma";
import { PrismaClient } from "@prisma/client";

AdminJS.registerAdapter({ Database, Resource });

const prisma = new PrismaClient();

const adminJsOptions = {
  resources: [
    {
      resource: { model: prisma.product, client: prisma },
      options: {
        properties: {
          id: { isVisible: false },
        },
      },
    },
  ],
  rootPath: "/admin",
};

export default adminJsOptions;
