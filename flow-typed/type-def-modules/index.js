// @flow

declare module 'reselect' {
    declare module.exports: any;

    declare function createSelector(): Function
}

declare module 'react-redux' {
    declare module.exports: any;

    declare function connect(): Function
    declare function Provider(): Function
}

declare module 'redux' {
    declare module.exports: any;

    declare function combineReducers(): Function
}

declare module 'redux-saga' {
    declare module.exports: any;
}

declare module 'redux-saga/effects' {
    declare module.exports: any;

    declare function takeLatest(): Promise<any>;
    declare function take(): Promise<any>;
    declare function put(action: any): Promise<any>;
    declare function all(): Iterator;
}

declare module 'redux-logger' {
    declare module.exports: any;
}

declare module 'awesome-phonenumber' {
    declare module.exports: any;
}

declare module 'react-toast-notifications' {
    declare module.exports: any;
}

declare module 'react-router-dom' {
    declare module.exports: any;

    declare function withRouter(): Function
    declare function Switch(): Function
    declare function Route(): Function
    declare function BrowserRouter(): Function
    declare function Router(): Function
}

declare module 'history' {
    declare module.exports: any;
}

declare module 'styled-components' {
    declare module.exports: any;
}

declare module 'react-google-login' {
    declare module.exports: any;
}

declare module 'react-dropdown' {
    declare module.exports: any;
}
