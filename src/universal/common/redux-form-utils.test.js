import {
  required,
  maxLength,
  minLength,
  isNumber,
  minValue,
  isLink,
  email,
} from './redux-form-utils';

describe('Redux Utils', () => {
  test('should validate required', () => {
    const testValue = '';
    const expected = 'Required';
    const actual = required(testValue);

    expect(actual).toEqual(expected);
  });
  test('should validate maxLength', () => {
    const max = 5;
    const maxLength5 = maxLength(max);
    const expected = `Must be ${max} characters or less`;
    let value = 'len';
    let actual = maxLength5(value);

    expect(actual).toBeFalsy();

    value = 'length of 5';
    actual = maxLength5(value);

    expect(actual).toEqual(expected);
  });

  test('should validate minLength', () => {
    const min = 5;
    const minLength5 = minLength(min);
    const expected = `Must be ${min} characters or more`;
    let value = 'length of 5';
    let actual = minLength5(value);

    expect(actual).toBeFalsy();

    value = 'len';
    actual = minLength5(value);

    expect(actual).toEqual(expected);
  });

  test('should validate number', () => {
    let value = 'value';
    const expected = 'Must be a number';
    let actual = isNumber(value);

    expect(actual).toEqual(expected);

    value = 4;
    actual = isNumber(value);
    expect(actual).toBeFalsy();
  });

  test('should validate link', () => {
    let value = 'value';
    const expected = 'Invalid url address';
    let actual = isLink(value);

    expect(actual).toEqual(expected);

    value = 'http://google.com';
    actual = isLink(value);

    expect(actual).toBeFalsy();
  });

  test('should validate email', () => {
    let value = 'value';
    const expected = 'Invalid  email address';
    let actual = email(value);

    expect(actual).toEqual(expected);

    value = 'gogle@gmail.com';
    actual = email(value);

    expect(actual).toBeFalsy();
  });

  test('should validate minValue', () => {
    const min = 5;
    const minValue5 = minValue(min);
    const expected = `Must be at least ${min}`;
    let actual = minValue5(3);

    expect(actual).toEqual(expected);

    actual = minValue5(6);

    expect(actual).toBeFalsy();
  });
});
