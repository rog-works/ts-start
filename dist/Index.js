"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Index {
    static handler() {
        const router = express.Router();
        const self = new this();
        router.get('/', self.index);
        return router;
    }
    index(req, res) {
        res.json({ result: true });
    }
}
exports.default = Index;
//# sourceMappingURL=Index.js.map