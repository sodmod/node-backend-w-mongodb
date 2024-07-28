"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouters_1 = __importDefault(require("./routes/userRouters"));
const port = process.env.PORT || 3002;
require("./db/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', userRouters_1.default);
app.listen(port, () => {
    console.log('Server is running on port:', port);
});
