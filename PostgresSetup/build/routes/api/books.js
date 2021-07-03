"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var book_1 = require("../../models/book");
var booksRouter = express_1.default.Router();
var store = new book_1.BookStore();
booksRouter.get('/', function (_req, res) {
    var result = store.index();
    res.send(result);
});
exports.default = booksRouter;
