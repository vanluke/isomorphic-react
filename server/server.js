import express from 'express';
import fs from 'fs';
import path from 'path';
/* eslint-disable */
import sync from 'browser-sync';
/* eslint-enable */
import config from './config';

const app = express();
const port = config.get('port');
const {
  buildPath,
  bundlePath,
  indexFilePath,
} = config.get('server');
const dev = (process.env.NODE_ENV === 'development');
/* eslint-disable */
const {render} = require(bundlePath);
/* eslint-enable */
const ind = fs.readFileSync(indexFilePath, 'utf-8');

const srcReg = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;

const src = ind.match(srcReg).join('\r\n');

app.use((req, res, next) => (req.url.indexOf('.') >= 0
  ? next()
  : render(req, res, src)),
);

app.use(express.static(path.join(__dirname, '..', buildPath)));

app.listen(port, () => {
  console.log(`listening on ${port}`, new Date().toString());
  return dev && sync({
    files: ['src/**/*.{html,js,css}'],
    open: false,
    port,
    proxy: `localhost:${port}`,
    online: false,
  });
});
