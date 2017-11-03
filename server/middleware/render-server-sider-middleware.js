import {getScriptsFilesNames, sortScripts, loadScripts} from '../helpers';

const isServerSide = process.env.TARGET_ENV === 'server';

export default (bundlePath, publicPath) => app =>
  (isServerSide ? (() => {
    const {render, handleRoutes} = loadScripts(bundlePath);
    const files = sortScripts(getScriptsFilesNames(publicPath));

    const routesHandler = handleRoutes(render, files);

    return app.use('/', (req, res, next) => routesHandler({req, res, next}));
  })() : false);
