import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import configureServerSideRendering from './middleware';
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

app.use(express.static(path.join(__dirname, '..', 'build/public')));
configureServerSideRendering(bundlePath, publicPath)(app);

app.listen(port, () => {
  console.log(`listening on ${port}`, new Date().toString());
});

export default app;
