"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.json({ "Mensaje": "Hola" });
});
app.get('/otro', (req, res) => {
    res.json({ "Mensaje": "Otro" });
});
app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto', PORT);
});
