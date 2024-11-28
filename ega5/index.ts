import { App } from './src/app';
import express from 'express';
import { HOST, PORT } from './src/constants/constants';
import { readFileSync } from 'fs';

const app = new App();
app.run();

const webApp = express();

webApp.get('/report', (req, res) => {
  res.send(JSON.stringify(app.getBest()));
});
webApp.get('/', (req, res) => {
  const html = readFileSync('ega5/src/views/index.html', 'utf-8');
  res.send(html);
});

webApp.listen(PORT, () => {
  console.log(`Report is ready: ${HOST}`);
});
