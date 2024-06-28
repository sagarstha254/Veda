import express from "express";
import AdminJS from "adminjs";
import { buildRouter } from "@adminjs/express";
import adminJsOptions from "./src/admin.config.js"; // Note the change to .js extension
const app = express();
const adminJs = new AdminJS(adminJsOptions);
const router = buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map