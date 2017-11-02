import uuid from 'performance-uuid';
import config from 'config';
import {accommodationService} from './service';

jest.mock('universal/common/service');
import * as service from 'universal/common/service'; // eslint-disable-line

describe('Accommodation service', () => {
  it('should export functions', () => {
    const actual = Object.keys(accommodationService);
    const expected = [
      'getAccommodations',
      'createAccommodation',
    ];

    expect(actual).toEqual(expected);
  });

  it('should getAccommodations gets accommodations', async () => {
    service.request.mockImplementation(() => []);

    const actual = await accommodationService.getAccommodations();
    const expected = [];

    expect(actual).toEqual(expected);
  });

  it('should createAccommodation create accommodation', async () => {
    const accommodation = {
      name: 'name',
      id: uuid(),
      guid: uuid(),
    };

    service.request.mockImplementation(() => [accommodation]);

    const actual = await accommodationService
      .createAccommodation(accommodation);

    const expected = [accommodation];

    expect(actual).toEqual(expected);
  });

  it('should getAccommodations call request with prop', async () => {
    const accommodation = {
      name: 'name',
      id: uuid(),
      guid: uuid(),
    };

    service.request.mockImplementation(() => [accommodation]);

    await accommodationService
      .createAccommodation(accommodation);

    const expected = {
      path: `/${config.api.routes.accommodations}`,
      errorMessage: 'An error occured while loading Accommodations',
    };

    expect(service.request).toHaveBeenCalledWith(expected);
  });

  it('should createAccommodation call request with prop', async () => {
    const accommodation = {
      name: 'name',
      id: uuid(),
      guid: uuid(),
    };

    service.request.mockImplementation(() => [accommodation]);

    await accommodationService
      .createAccommodation(accommodation);

    const expected = {
      errorMessage: 'Can not create accommodation',
      path: `/${config.api.routes.accommodations}`,
      type: 'post',
      data: accommodation,
    };

    expect(service.request).toHaveBeenCalledWith(expected);
  });
});
