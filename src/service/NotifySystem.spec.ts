import { Notify } from './NotifySystem'

describe('Should render NotifySystem', () => {

    global.localStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        length: 0,
        key: jest.fn(),
        removeItem: jest.fn(),
    };

    global.Notification = jest.fn() as any;
    Notification.requestPermission = jest.fn();


    it('Should render Notify', () => {
        Notify()
    })

})