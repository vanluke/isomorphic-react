import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import {getScriptsFilesNames, sortScripts} from './helpers';
import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

const port = config.get('port');
const {
  bundlePath,
  publicPath,
} = config.get('server');

routes(app);

/* eslint-disable */
const {render, handleRoutes} = require(bundlePath);
// /* eslint-enable */

const files = sortScripts(getScriptsFilesNames(publicPath));

const routesHandler = handleRoutes(render, files);

app.use(express.static(path.join(__dirname, '..', 'build/public')));

app.use('/', (req, res, next) => routesHandler({req, res, next}));

app.listen(port, () => {
  console.log(`listening on ${port}`, new Date().toString());
});

export default app;
