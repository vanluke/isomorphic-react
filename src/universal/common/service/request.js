import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import config from 'config';
import {ajax} from './isomorphic-ajax';

const baseUrl = `${config.api.root}/${config.api.version}`;

export const request = ({
  data = {},
  path = '',
  type = 'get',
}) => ajax({
  method: type,
  body: data,
  url: `${baseUrl}${path}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}).catch(e => Observable.of(e));
