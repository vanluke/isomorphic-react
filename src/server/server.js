import ssr from './server-render';
import template from './template';

export function render(req, res, src) {
  const context = {
    splitPoints: [],
    location: req.url,
  };

  const markup = ssr({req, context});

  return res.send(template({
    title: 'isomorphic react',
    context,
    markup,
    src,
  }));
}
