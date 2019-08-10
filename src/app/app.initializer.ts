import { APP_INITIALIZER } from '@angular/core';
import { AppState } from './app.state';

const initializer = (state: AppState) =>
    async () => {
        const themeRequest = await fetch('assets/theme.scss');
        const theme = await themeRequest.text();

        state.setTheme(theme);

        return true;
    };

export const APP_INITIALIZER_PROVIDER = {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [AppState],
    multi: true,
};