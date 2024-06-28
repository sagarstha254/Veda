import AdminJS from "adminjs";
import { PrismaClient } from "@prisma/client";
import { Database, Resource } from "@adminjs/prisma";
const prisma = new PrismaClient();
AdminJS.registerAdapter({ Database, Resource });
const adminJsOptions = {
    databases: [prisma],
    resources: [
        {
            resource: prisma.product,
            options: {
                properties: {
                    title: { isVisible: { list: true, show: true, edit: true } },
                    description: { isVisible: { list: false, show: true, edit: true } },
                    price: { isVisible: { list: true, show: true, edit: true } },
                    discountPercentage: { isVisible: { list: false, show: true, edit: true } },
                    rating: { isVisible: { list: true, show: true, edit: true } },
                    stock: { isVisible: { list: true, show: true, edit: true } },
                    tags: { isVisible: { list: false, show: true, edit: true } },
                    sku: { isVisible: { list: false, show: true, edit: true } },
                    weight: { isVisible: { list: false, show: true, edit: true } },
                    dimensions: { isVisible: { list: false, show: true, edit: true } },
                    warrantyInformation: { isVisible: { list: false, show: true, edit: true } },
                    shippingInformation: { isVisible: { list: false, show: true, edit: true } },
                    availabilityStatus: { isVisible: { list: true, show: true, edit: true } },
                    reviews: { isVisible: { list: false, show: true, edit: true } },
                    returnPolicy: { isVisible: { list: false, show: true, edit: true } },
                    meta: { isVisible: { list: false, show: true, edit: true } },
                    images: { isVisible: { list: false, show: true, edit: true } },
                    thumbnail: { isVisible: { list: false, show: true, edit: true } },
                },
            },
        },
    ],
    rootPath: "/admin",
};
export default adminJsOptions;
//# sourceMappingURL=admin.config.js.map