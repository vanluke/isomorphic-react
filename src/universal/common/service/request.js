import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
// import {ajax} from 'rxjs/observable/dom/ajax';
import {ajax} from './isomorphic-ajax';

export const request = ({
  data = {},
  path = '',
  type = 'get',
}) => ajax({
  method: type,
  body: data,
  url: path,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}).catch(e => Observable.of(e));
