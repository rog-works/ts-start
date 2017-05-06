"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Index_1 = require("./Index");
class Server {
    constructor(_app = express()) {
        this._app = _app;
        this._app.use('/', Index_1.default.handler());
    }
    listen() {
        this._app.listen(process.env.PORT, () => {
            console.log(`listen on port ${process.env.PORT}`);
        });
    }
}
new Server().listen();
//# sourceMappingURL=Server.js.map