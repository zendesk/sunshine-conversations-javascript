describe('Smooch', () => {
  var Smooch = require('../node');

  it('should have the webhooks API', () => {
    var smooch = new Smooch();
    smooch.webhooks.should.exist;
  });

  it('should have the JWT utils', () => {
    var smooch = new Smooch();
    smooch.utils.jwt.should.exist;
  });
});
