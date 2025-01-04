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
            isNotify === toNotifyConstants.NOTIFY_GRANTED &&
                localStorage.setItem(toNotifyConstants.NOTIFY_STORE, toNotifyConstants.NOTIFY_GRANTED);
            isNotify === toNotifyConstants.NOTIFY_DENIED &&
                localStorage.setItem(toNotifyConstants.NOTIFY_STORE, toNotifyConstants.NOTIFY_DENIED);
        });
    }
};
