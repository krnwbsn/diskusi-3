"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const mahasiswaRouter_1 = require("./src/routers/mahasiswaRouter");
dotenv_1.default.config();
if (!process.env.PORT) {
    process.exit(1);
}
const app = (0, express_1.default)();
const port = process.env.PORT;
const runningText = `⚡️[server]: Server is running at https://localhost:${port}`;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(runningText);
});
app.use('/api/mahasiswa', mahasiswaRouter_1.mahasiswaRouter);
app.listen(port, () => {
    console.log(runningText);
});
