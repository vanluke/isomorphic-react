import React from 'react';
import {ServerStyleSheet} from 'styled-components';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {renderRoutes} from 'react-router-config';
import routes from 'universal/routes';
import {rehydrateStyles} from 'server/helpers';

export default function render({
  req,
  context,
  store,
}) {
  const sheet = new ServerStyleSheet();
  const styles = rehydrateStyles(sheet);
  return {
    styles,
    content: renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>),
  };
}