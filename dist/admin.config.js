"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = __importDefault(require("adminjs"));
const prisma_1 = require("@adminjs/prisma");
const client_1 = require("@prisma/client");
adminjs_1.default.registerAdapter({ Database: prisma_1.Database, Resource: prisma_1.Resource });
const prisma = new client_1.PrismaClient();
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
exports.default = adminJsOptions;
