"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var books_1 = __importDefault(require("./api/books"));
var dashboard_1 = __importDefault(require("./api/dashboard"));
var orders_1 = __importDefault(require("./api/orders"));
var users_1 = __importDefault(require("./api/users"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Server is up. API is ready for use. Please access the correct endpoint.');
});
routes.use('/books', books_1.default);
routes.use('/users', users_1.default);
routes.use('/orders', orders_1.default);
routes.use('/dashboard', dashboard_1.default);
exports.default = routes;
