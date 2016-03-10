import sinon from 'sinon';
describe('JWT', () => {
    var jsonwebtoken = require('jsonwebtoken');
    var jwtUtils = require('../../../src/utils/jwt');

    var sandbox;
    var signSpy;
    before(() => {
        sandbox = sinon.sandbox.create();
        signSpy = sandbox.spy(jsonwebtoken, 'sign');
    });

    afterEach(() => {
        sandbox.restore();
    });


    describe('#generate', () => {
        it('should call sign', () => {
            jwtUtils.generate({}, 'secret', 'key');
            signSpy.should.have.been.calledOnce;
        });
    });
});
