export const STORAGE_CONFIGURATION = {
    name: '__mydb',
    driverOrder: [
        'indexeddb',
        'sqlite',
        'websql'
    ]
};

export const TOAST_CONFIGURATION = {
    DURATION: 2000,
    POSITION: 'center',
};

export const NOTIFICATION_THEMES = {
    SUCCESS: '#4bb31a',
    ERROR: '#ff652f',
    WARNING: '#ffdc52'
};

export const PROMISE_BUTTON_MODULE_OPTIONS = {
    spinnerTpl: '<img src="assets/images/loading_spinner.gif" class="spinner w-1">',
    // disable buttons when promise is pending
    disableBtn: true,
    // the class used to indicate a pending promise
    btnLoadingClass: 'is-loading',
    // only disable and show is-loading class for clicked button,
    // even when they share the same promise
    handleCurrentBtnOnly: true,
};

