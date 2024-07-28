"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined in the environment variables.');
}
console.log('Connecting to MongoDB...');
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongo db connected"))
    .catch(err => console.error("Failed connect to mongo db"));
