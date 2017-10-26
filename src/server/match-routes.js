import {matchRoutes} from 'react-router-config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/concat';
import {ActionsObservable} from 'redux-observable';
import store, {dependencies} from 'universal/store';
import routes from 'universal/routes';

export const handleRoutes = (render, src) => ({
  req,
  res,
}) => matchRoutes(routes, req.url).reduce((acc, {route: {component}}) => {
  const connect = component && component.serverConnect && component.serverConnect[0];
  return acc.concat(connect ? connect.epic(ActionsObservable.of(connect.action$()), store, dependencies) : Observable.of({type: ''}));
}, Observable.empty())
  .map((ac = {type: ''}) => store.dispatch(ac))
  .toPromise()
  .then(() => {
    const context = {};
    const {content, styles} = render({req, context, store});
    return res.render('index', {
      title: 'Isomorphic app', data: store.getState(), content, styles, src});
  });
