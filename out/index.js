"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const express_1 = require("express");
const constants_1 = require("./src/constants/constants");
const fs_1 = require("fs");
const app = new app_1.App();
app.run();
const webApp = (0, express_1.default)();
webApp.get('/report', (req, res) => {
    res.send('report here');
});
webApp.get('/', (req, res) => {
    const html = (0, fs_1.readFileSync)('ega5/src/views/index.html', 'utf-8');
    res.render('index', { html });
});
webApp.listen(constants_1.PORT, () => {
    console.log(`Report is ready: ${constants_1.HOST}`);
});
