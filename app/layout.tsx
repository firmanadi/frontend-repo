import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import theme from '../theme/theme';
import store from '../store/store';

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    );
};

export default Layout;
