"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('index')
        res.json({ text: 'The API is /api/games' });
    }
}
exports.indexController = new IndexController();
