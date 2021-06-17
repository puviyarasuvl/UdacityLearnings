"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var convert_1 = __importDefault(require("./api/convert"));
var countries_1 = __importDefault(require("./api/countries"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Hey there..! Welcome to root route');
});
routes.use('/countries', countries_1.default);
routes.use('/convert', convert_1.default);
exports.default = routes;
