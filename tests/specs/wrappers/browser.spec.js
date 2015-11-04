describe('Smooch', () => {
  var Smooch = require('../../../src/wrappers/browser');

  it('should not have the webhooks API', () => {
    var smooch = new Smooch();
    expect(smooch.webhooks).to.be.undefined;
  });

  it('should not have the JWT utils', () => {
    var smooch = new Smooch();
    expect(smooch.utils.jwt).to.be.undefined;
  });
});
