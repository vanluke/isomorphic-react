### Chunks 

  webpack chunks load on server 
  need to create HOC to handle chunk lazy loading/server loading
  I was able to return nice react js component (Spinner)
---
### Styles

  using stlyed component
  - a bit tricky 
    To get styles work need to create instance of ServerStyleSheet pass down to component and then call getStyleTags
    it retuns styles in a string of multiple &lt;style&gt; so need to do some transformation and then inject into html
    (I use pug)
    Works perfecly fine
---
### Test
---
### Routing

  need to create react routing a bit differenly than only on client
  Thirst thing need to construct object routes configuration
```javascript
export const routes = [
{
    component: Root,
    path: '/',
    routes: [
      {
        exact: true,
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/accommodations',
        component: Accommodations,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];
```
then both on server and client need to handle it in root component with help of renderRoutes function from react-router-config
```javascript
{renderRoutes(routes)}
```
routes comes as props to this component
---
## Rendering

### Client side 
* promise based
* Need to define global object. In my case splitPoints which is an array
* then again call 
```javascript
{renderRoutes(routes)}
```
* Why twice? Becase We are routing everything from / and then neseted routes under /

```javascript
Promise.all(splitPoints.map(chunk => getProperty(chunk, bundles).load()))
  .then(() => render(<BrowserRouter>
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>, mountNode));
```

### Server side 
a bit more complicated
again with a help of renderRoutes method we are filtering components and 
prepairing data. I am using redux and redux-observable so I have to construct static 
object on component that informs about epics. This epics then are dispatch
next thing to do is to pass this call renderToString from react-dom and pass to res.render function
One point to note is that in renderToString I needed to use one more time renderRoutes

```javascript
renderToString(
  <Provider store={store}>
    <StaticRouter
      location={req.url}
      context={context}
    >
      {renderRoutes(routes)}
    </StaticRouter>
  </Provider>),
```
---
### Server side 
  I am using node express server
  I was able to mount router for api and also handle client side routing 
  Need to setup cors to make layers independant