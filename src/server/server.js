// import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router'
import {renderRoutes} from 'react-router-config';
import {routes} from '../universal/routes';
import {Landing} from '../universal';
import {ServerStyleSheet} from 'styled-components';

const sheet = new ServerStyleSheet();

export function render(req, res) {
    const context = {
      splitPoints: [],
    };
    const markup = renderToString(sheet.collectStyles(<StaticRouter
      location={req.url}
      context={context}
    >
      <Landing>
        {renderRoutes(routes)}
      </Landing>
    </StaticRouter>));
    return res.send(`
      <!doctype html>
      <html>
        <head>
          <title>SSR</title>
        </head>
        <body>
          <div id="app">${markup}</div>
          <script>
            window.splitPoints=${JSON.stringify(context.splitPoints)};
          </script>
        </body>
      </html>
    ` );
}
