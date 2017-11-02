import epics from './epic';

describe('Root epics', () => {
  it('should epics be defined', () => {
    const actual = epics;
    expect(actual).toBeDefined();
  });
});
