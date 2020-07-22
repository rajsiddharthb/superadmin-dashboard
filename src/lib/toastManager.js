const TOASTER_DEFAULTS = {
  placement: 'top-left',
  autoDismiss: true
};

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

export default class TOAST {
    static toastManager = null;

    static setToastManager(addToast) {
      TOAST.toastManager = addToast;
    }

    static add(content, type, options = {}) {
      if (!content) {
        // eslint-disable-next-line no-alert
        alert('Toast Content is missing');
      }
      if (!TOAST.toastManager) {
        // eslint-disable-next-line no-alert
        alert('Toast Manager is not found');
        return;
      }
      TOAST.toastManager(content, {
        ...TOASTER_DEFAULTS,
        ...options,
        appearance: type || TOAST_TYPES.ERROR
      });
    }

    static success(content, options) {
      TOAST.add(content, TOAST_TYPES.SUCCESS, options);
    }

    static error(content, options) {
      TOAST.add(content, TOAST_TYPES.ERROR, options);
    }

    static warning(content, options) {
      TOAST.add(content, TOAST_TYPES.WARNING, options);
    }

    static info(content, options) {
      TOAST.add(content, TOAST_TYPES.INFO, options);
    }
}
