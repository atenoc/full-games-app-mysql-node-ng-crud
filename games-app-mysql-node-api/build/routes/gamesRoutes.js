"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.gamesController.list);
        this.router.get('/:id', gamesControllers_1.gamesController.getOne);
        this.router.post('/', gamesControllers_1.gamesController.create);
        this.router.put('/:id', gamesControllers_1.gamesController.update);
        this.router.delete('/:id', gamesControllers_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
