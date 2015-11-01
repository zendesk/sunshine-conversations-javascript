jest.dontMock('../smooch');

describe('Smooch', () => {
  it('should not have the webhooks API', () => {
    var Smooch = require('../smooch');
    var smooch = new Smooch();
    expect(smooch.webhooks).toBeUndefined();
  });
});
