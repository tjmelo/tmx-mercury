const toNotifyConstants = Object.freeze({
    NOTIFY_DEFAULT: 'default',
    NOTIFY_DENIED: 'denied',
    NOTIFY_GRANTED: 'granted',
    NOTIFY_STORE: 'Notification',
});

export const Notify = () => {
    const isNotify = Notification.permission;
    const hasNotificationStorage = localStorage.getItem(toNotifyConstants.NOTIFY_STORE);

    if (!hasNotificationStorage) {
        Notification.requestPermission(() => {
            isNotify === 'granted' &&
                localStorage.setItem(toNotifyConstants.NOTIFY_STORE, toNotifyConstants.NOTIFY_GRANTED);
            isNotify === 'denied' &&
                localStorage.setItem(toNotifyConstants.NOTIFY_STORE, toNotifyConstants.NOTIFY_DENIED);
        });
    }
};
