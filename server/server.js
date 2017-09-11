import express from 'express';
import path from 'path';
import sync from 'browser-sync';

const app = express();
const port = 5000;
const dev = 'development' === process.env.NODE_ENV;

app.use(express.static(path.join(__dirname, '..', 'build')));
const {render} = require('../build/server.js');

app.use(render);

app.listen(port, () => {
  console.log('works', new Date().toString());
  return dev && sync({
      files: ['src/**/*.{html,js,css}'],
       open: false,
       port,
       proxy: `localhost:${port}`,
       online: false,
    });
});
