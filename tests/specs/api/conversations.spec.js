import { createReadStream } from 'streamifier';
import * as httpMock from '../../mocks/http';
import { ConversationsApi } from '../../../src/api/conversations';
import credential from '../../../src/utils/credential';

describe('Conversations API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = credential({
        appToken: 'token'
    }).authHeaders;
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new ConversationsApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(userId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation');
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });
    });

    describe('#postPostback', () => {
        it('should call http', () => {
            const body = {
                actionId: 'action-id'
            };

            return api.postPostback(userId, body.actionId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'postback');
                httpSpy.should.have.been.calledWith('POST', fullUrl, body, httpHeaders);
            });
        });
    });

    describe('#sendMessage', () => {
        it('should throw an error', () => {
            const message = {
                text: 'this is a message'
            };

            return api.sendMessage(userId, message).catch(() => {
                httpSpy.should.not.have.been.called;
            });
        });
    });

    describe('#uploadImage', () => {
        it('should throw an error', () => {
            const source = createReadStream('some source object');
            const message = {
                text: 'this is a message'
            };

            return api.uploadImage(userId, source, message).catch(() => {
                httpSpy.should.not.have.been.called;
            });
        });
    });

    describe('#resetUnreadCount', () => {
        it('should call http', () => {
            return api.resetUnreadCount(userId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'read');
                httpSpy.should.have.been.calledWith('POST', fullUrl, undefined, httpHeaders);
            });
        });
    });
});
