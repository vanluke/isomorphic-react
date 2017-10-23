import {Observable} from 'rxjs/Observable';
import {ajax} from './isomorphic-ajax';

describe('Isomorphic ajax', () => {
  it('should be a function', () => {
    expect(typeof ajax).toEqual('function');
  });

  it('should return Observable', () => {
    const actual = ajax({
      path: '',
    });

    expect(actual).toBeInstanceOf(Observable);
  });
});