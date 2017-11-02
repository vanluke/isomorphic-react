import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {request} from './request';

jest.mock('./isomorphic-ajax');
import * as service from './isomorphic-ajax'; // eslint-disable-line

describe('Request', () => {
  it('should handle request', () => {
    service.ajax.mockImplementation(() => Observable.of([]));
    const actual = request({
      path: '',
    });

    const expected = [];
    actual.subscribe((data) => {
      expect(data).toEqual(expected);
    });
  });
});
