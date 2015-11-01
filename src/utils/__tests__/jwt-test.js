jest.autoMockOff();

describe('JWT', () => {
  it('should exist', function() {
    var jwtUtils = require('../jwt');

    expect(jwtUtils.generate).toBeDefined();
  })
});
