export default function template({markup, src, context, title}) {
  return `<!doctype html>
    <html>
      <head>
        <base href="/">
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${process.env.NODE_ENV === 'production' ? markup : `<div>${markup}</div>`}</div>
        <script>
          window.splitPoints=${JSON.stringify(context.splitPoints)};
        </script>
        ${src}
      </body>
    </html>
  `;
}
