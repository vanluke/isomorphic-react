import React from 'react';
import url from 'url';
import {ServerStyleSheet} from 'styled-components';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import Root from '../universal/root';

const sheet = new ServerStyleSheet();

export default function render({
  req,
  context,
}) {
  return renderToString(sheet.collectStyles(<StaticRouter
    location={url.parse(req.url)}
    context={context}
  >
    <Root />
  </StaticRouter>));
}
